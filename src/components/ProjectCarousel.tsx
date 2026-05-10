
import { useRef, useState, useMemo, Suspense, Component } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Image, Text, Float, RoundedBox, useCursor, Html } from '@react-three/drei';
import * as THREE from 'three';
import { profile } from '../data';
import { useTheme } from '../ThemeContext';
import { ExternalLink, ChevronLeft, ChevronRight, Loader2, AlertTriangle } from 'lucide-react';

class ProjectErrorBoundary extends Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <group>
           <RoundedBox args={[3, 4, 0.1]} radius={0.1} smoothness={4}>
             <meshStandardMaterial color="#222" />
           </RoundedBox>
           <Html center>
             <div className="flex flex-col items-center gap-1 text-red-500/50 mix-blend-screen">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-[8px] font-mono uppercase">IO Error</span>
             </div>
           </Html>
        </group>
      );
    }
    return this.props.children;
  }
}

function LoadingFallback() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2 text-cyan-500 font-mono">
        <Loader2 className="w-6 h-6 animate-spin" />
        <span className="text-[10px] uppercase">Initializing Module...</span>
      </div>
    </Html>
  );
}

function ProjectCard({
  project,
  position,
  rotation,
  active,
  onSelect,
  accentHex,
  panelColor,
  titleColor,
  panelMetalness,
  panelRoughness,
}: any) {
  const mesh = useRef<any>(null);
  const [hovered, setHover] = useState(false);
  useCursor(hovered);

  useFrame((state) => {
    if (mesh.current) {
        mesh.current.position.lerp(new THREE.Vector3(...position), 0.1);
        mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, rotation[1], 0.1);
        mesh.current.scale.lerp(new THREE.Vector3(active ? 1.2 : 1, active ? 1.2 : 1, 1), 0.1);
    }
  });

  return (
    <group
      ref={mesh}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onPointerDown={() => {
        if (active && onSelect) onSelect(project);
      }}
      >
      <RoundedBox args={[3, 4, 0.1]} radius={0.1} smoothness={4}>
        <meshStandardMaterial color={panelColor} metalness={panelMetalness} roughness={panelRoughness} />
      </RoundedBox>
      <Image
        url={project.image}
        scale={[2.8, 2.5]}
        position={[0, 0.6, 0.1]}
        toneMapped={false}
      />
      <Text
        position={[0, -1, 0.11]}
        fontSize={0.2}
        color={titleColor}
        maxWidth={2.5}
        textAlign="center"
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        position={[0, -1.4, 0.11]}
        fontSize={0.1}
        color={accentHex}
        maxWidth={2.5}
        textAlign="center"
      >
        {project.tech.join(' | ')}
      </Text>
    </group>
  );
}

export const ProjectCarousel = () => {
    const { resolved } = useTheme();
    const isLight = resolved === 'light';
    const accentHex = isLight ? '#16a34a' : '#22d3ee';
    const spotHex = isLight ? '#15803d' : '#0ea5e9';
    const panelColor = isLight ? '#111111' : '#e4e4e7';
    const titleColor = isLight ? '#ffffff' : '#111827';
    const panelMetalness = isLight ? 0.8 : 0.12;
    const panelRoughness = isLight ? 0.2 : 0.65;

    const [index, setIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const projects = profile.projects;

    const next = () => setIndex((prev) => (prev + 1) % projects.length);
    const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

    const handleWheel = (event: any) => {
      event.preventDefault();
      if (event.deltaX > 0) {
        next();
      } else if (event.deltaX < 0) {
        prev();
      }
    };

    const handleSelect = (project: any) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <section onWheel={handleWheel} className="relative h-[980px] w-full flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center z-10 px-4 lg:px-0">
                <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase mb-3">Technological Ecosystem</h2>
                <p className="text-cyan-400 font-mono text-sm md:text-base tracking-[0.2em] uppercase">Interactive 3D Deployment</p>
            </div>

            <div className="w-full h-[760px]">
                <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} color={accentHex} />
                    <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color={spotHex} />
                    
                    <Suspense fallback={<LoadingFallback />}>
                        {projects.map((project, i) => {
                            const offset = i - index;
                            // Handle infinite-like wrapping for position
                            let displayOffset = offset;
                            if (offset > projects.length / 2) displayOffset -= projects.length;
                            if (offset < -projects.length / 2) displayOffset += projects.length;

                            const position = [displayOffset * 4, 0, -Math.abs(displayOffset) * 2];
                            const rotation = [0, -displayOffset * 0.5, 0];
                            const active = i === index;

                            return (
                                <ProjectErrorBoundary key={i}>
                                    <ProjectCard 
                                        project={project} 
                                        position={position} 
                                        rotation={rotation} 
                                        active={active}
                                        onSelect={handleSelect}
                                        accentHex={accentHex}
                                        panelColor={panelColor}
                                        titleColor={titleColor}
                                        panelMetalness={panelMetalness}
                                        panelRoughness={panelRoughness}
                                    />
                                </ProjectErrorBoundary>
                            );
                        })}
                    </Suspense>
                </Canvas>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-12 mt-8 z-10">
                <button onClick={prev} className="p-4 bg-white/5 rounded-full border border-white/10 hover:bg-cyan-500 hover:text-black transition-all">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                
                <div className="flex flex-col items-center">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Module {index + 1} / {projects.length}</span>
                    <div className="flex gap-2">
                        {projects.map((_, i) => (
                            <div 
                                key={i} 
                                className={`w-8 h-1 rounded-full transition-all duration-500 ${i === index ? 'bg-cyan-500 w-12' : 'bg-white/10'}`} 
                            />
                        ))}
                    </div>
                    {projects[index].link && (
                        <a 
                            href={projects[index].link} 
                            target="_blank" 
                            className="mt-6 flex items-center gap-2 text-xs font-mono text-white hover:text-cyan-400 transition-colors bg-white/5 px-6 py-2 rounded-full border border-white/10"
                        >
                            INITIATE CONNECTION <ExternalLink className="w-3 h-3" />
                        </a>
                    )}
                </div>

                <button onClick={next} className="p-4 bg-white/5 rounded-full border border-white/10 hover:bg-cyan-500 hover:text-black transition-all">
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
            
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

            {selectedProject && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
                <div className="w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/95 shadow-2xl">
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 p-6">
                    <div>
                      <h3 className="text-3xl font-black text-white">{selectedProject.title}</h3>
                      <p className="text-sm uppercase tracking-[0.2em] text-cyan-400 mt-2">{selectedProject.subtitle}</p>
                    </div>
                    <button
                      onClick={closeModal}
                      className="text-white/80 hover:text-white text-3xl leading-none"
                    >
                      ×
                    </button>
                  </div>
                  <div className="grid gap-6 md:grid-cols-[1.3fr_0.9fr] p-6">
                    <div className="rounded-4xl  dark:bg-black/80 bg-white/5 p-4 flex items-center justify-center">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="max-h-[580px] w-full object-contain rounded-4xl"
                      />
                    </div>
                    <div className="space-y-5 text-white">
                      <p className="text-sm leading-relaxed text-zinc-300">{selectedProject.description}</p>
                      <div className="space-y-4">
                        <div>
                          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">Period</span>
                          <p className="mt-2 text-white">{selectedProject.period}</p>
                        </div>
                        {selectedProject.tech && (
                          <div>
                            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">Technologies</span>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {selectedProject.tech.map((tech: string, idx: number) => (
                                <span key={idx} className="rounded-full bg-white/5 px-3 py-1 text-xs text-cyan-300">{tech}</span>
                              ))}
                            </div>
                          </div>
                        )}
                        {selectedProject.link && (
                          <a
                            href={selectedProject.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20"
                          >
                            Open Project
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </section>
    );
};
