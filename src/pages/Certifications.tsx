/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Download, Award, Calendar, Building, ExternalLink, Search, Shield, Lock, Cpu, Code, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';

// Import all certification images
import AccessControlConcepts from '../asstes/Certification/image/AccessControlConcepts.png';
import AdvancedLearningAlgorithms from '../asstes/Certification/image/AdvancedLearningAlgorithms.png';
import AdvancedMalwareandNetworkAnomalyDetection from '../asstes/Certification/image/AdvancedMalwareandNetworkAnomalyDetection.png';
import AIforCybersecurity from '../asstes/Certification/image/AIforCybersecurity.png';
import CalculusforMachineLearningandDataScience from '../asstes/Certification/image/CalculusforMachineLearningandDataScience.png';
import CASAExam20260409 from '../asstes/Certification/image/CASAExam20260409-31-sj9nmz.png';
import certifiedApiSecurityAnalyst from '../asstes/Certification/image/certified-api-security-analyst.png';
import CertifiedinCybersecurity from '../asstes/Certification/image/CertiﬁedinCybersecurity.png';
import CertifiedInformationSystemsSecurityProfessionalCISSP from '../asstes/Certification/image/CertiﬁedInformationSystemsSecurityProfessional(CISSP).png';
import CISSPDomain2AssetSecurity from '../asstes/Certification/image/CISSPDomain2:AssetSecurity.png';
import CISSPDomain3SecurityArchitectureandEngineering from '../asstes/Certification/image/CISSPDomain3:SecurityArchitectureandEngineering.png';
import CISSPDomain4CommunicationandNetworkSecurity from '../asstes/Certification/image/CISSPDomain4:CommunicationandNetworkSecurity.png';
import CISSPDomain5IdentityandAccessManagementIAM from '../asstes/Certification/image/CISSPDomain5:IdentityandAccessManagement(IAM).png';
import CISSPDomain6SecurityAssessmentandTesting from '../asstes/Certification/image/CISSPDomain6:SecurityAssessmentandTesting.png';
import CISSPDomain7SecurityOperations from '../asstes/Certification/image/CISSPDomain7:SecurityOperations.png';
import CISSPDomain8Softwaredevelopmentsecurity from '../asstes/Certification/image/CISSPDomain8:Softwaredevelopmentsecurity.png';
import Cryptography from '../asstes/Certification/image/Cryptography.png';
import ECCEHECertificate from '../asstes/Certification/image/ECC-EHE-Certificate.png';
import ImprovingDeepNeuralNetworksHyperparameterTuningRegularizationandOptimization from '../asstes/Certification/image/ImprovingDeepNeuralNetworks:HyperparameterTuning,RegularizationandOptimization.png';
import IncidentResponseBCandDRConcepts from '../asstes/Certification/image/IncidentResponse,BC,andDRConcepts.png';
import Introductionàlaprogrammationorientéeobjet from '../asstes/Certification/image/Introductionàlaprogrammationorientéeobjet.png';
import IntroductiontoAIforCybersecurity from '../asstes/Certification/image/IntroductiontoAIforCybersecurity.png';
import linearAgebar from '../asstes/Certification/image/linear-agebar.png';
import Machinelearning from '../asstes/Certification/image/Machine-learning.png';
import MathematicsforMachineLearningandDataScience from '../asstes/Certification/image/MathematicsforMachineLearningandDataScience.png';
import NetworkSecurity from '../asstes/Certification/image/NetworkSecurity.png';
import NeuralNetworksandDeepLearning from '../asstes/Certification/image/NeuralNetworksandDeepLearning.png';
import ProbabilityandStatisticsforMachineLearningandDataScience from '../asstes/Certification/image/Probability&StatisticsforMachineLearning&DataScience.png';
import SecuringAIandAdvancedTopics from '../asstes/Certification/image/SecuringAIandAdvancedTopics.png';
import SecurityOperations from '../asstes/Certification/image/SecurityOperations.png';
import SupervisedMachineLearningRegressionandClassification from '../asstes/Certification/image/SupervisedMachineLearning:RegressionandClassification.png';
import UnsupervisedLearningRecommendersReinforcementLearning from '../asstes/Certification/image/UnsupervisedLearning,Recommenders,ReinforcementLearning.png';

// Mapping des images importées
const imageFiles = {
  'Access Control Concepts': AccessControlConcepts,
  'Advanced Learning Algorithms': AdvancedLearningAlgorithms,
  'Advanced Malware and Network Anomaly Detection': AdvancedMalwareandNetworkAnomalyDetection,
  'AI for Cybersecurity': AIforCybersecurity,
  'Calculus for Machine Learning and Data Science': CalculusforMachineLearningandDataScience,
  'CASAExam20260409-31-sj9nmz': CASAExam20260409,
  'certified-api-security-analyst': certifiedApiSecurityAnalyst,
  'Certified in Cybersecurity': CertifiedinCybersecurity,
  'Certified Information Systems Security Professional (CISSP)': CertifiedInformationSystemsSecurityProfessionalCISSP,
  'CISSP Domain 2: Asset Security': CISSPDomain2AssetSecurity,
  'CISSP Domain 3: Security Architecture and Engineering': CISSPDomain3SecurityArchitectureandEngineering,
  'CISSP Domain 4: Communication and Network Security': CISSPDomain4CommunicationandNetworkSecurity,
  'CISSP Domain 5: Identity and Access Management (IAM)': CISSPDomain5IdentityandAccessManagementIAM,
  'CISSP Domain 6: Security Assessment and Testing': CISSPDomain6SecurityAssessmentandTesting,
  'CISSP Domain 7: Security Operations': CISSPDomain7SecurityOperations,
  'CISSP Domain 8: Software Development Security': CISSPDomain8Softwaredevelopmentsecurity,
  'Cryptography': Cryptography,
  'ECC-EHE-Certificate': ECCEHECertificate,
  'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization': ImprovingDeepNeuralNetworksHyperparameterTuningRegularizationandOptimization,
  'Incident Response, BC, and DR Concepts': IncidentResponseBCandDRConcepts,
  'Introduction à la programmation orientée objet': Introductionàlaprogrammationorientéeobjet,
  'Introduction to AI for Cybersecurity': IntroductiontoAIforCybersecurity,
  'linear': linearAgebar,
  'Machine-learning': Machinelearning,
  'Mathematics for Machine Learning and Data Science': MathematicsforMachineLearningandDataScience,
  'Network Security': NetworkSecurity,
  'Neural Networks and Deep Learning': NeuralNetworksandDeepLearning,
  'Probability & Statistics for Machine Learning & Data Science': ProbabilityandStatisticsforMachineLearningandDataScience,
  'Securing AI and Advanced Topics': SecuringAIandAdvancedTopics,
  'Security Operations': SecurityOperations,
  'Supervised Machine Learning: Regression and Classification': SupervisedMachineLearningRegressionandClassification,
  'Unsupervised Learning, Recommenders, Reinforcement Learning': UnsupervisedLearningRecommendersReinforcementLearning
};


const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Forcer le scroll vers le haut lors de l'ouverture de la page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = (certification) => {
    setSelectedCertification(certification);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCertification(null);
    setIsModalOpen(false);
  };

  // Liste complète des certifications avec leurs informations
  const certifications = [
    // Security Certifications
    {
      id: 1,
      title: "CASA Certified Professional",
      issuer: "Cloud Application Security Alliance",
      date: "2026",
      category: "security",
      image: imageFiles['CASAExam20260409-31-sj9nmz'],
      description: "Advanced cloud application security and secure development practices",
      credentialId: "CASA-2026-31"
    },
    {
      id: 2,
      title: "Certified API Security Analyst",
      issuer: "APISec University",
      date: "2026",
      category: "security",
      image: imageFiles['certified-api-security-analyst'],
            description: "Advanced API security testing and vulnerability assessment",
      credentialId: "API-SEC-2026"
    },
    {
      id: 3,
      title: "ECC Excellence Certificate",
      issuer: "European Cybersecurity Challenge",
      date: "2024",
      category: "security",
      image: imageFiles['ECC-EHE-Certificate'],
            description: "Excellence in cryptographic implementations and security protocols",
      credentialId: "ECC-EHE-2024"
    },
    {
      id: 4,
      title: "Certified Information Systems Security Professional (CISSP)",
      issuer: "ISC2",
      date: "2024",
      category: "security",
      image: imageFiles['Certified Information Systems Security Professional (CISSP)'],
            description: "Comprehensive information security management and governance",
      credentialId: "CISSP-2024"
    },
    {
      id: 5,
      title: "Certified in Cybersecurity",
      issuer: "ISC2",
      date: "2024",
      category: "security",
      image: imageFiles['Certified in Cybersecurity'],
            description: "Foundational cybersecurity principles and practices",
      credentialId: "CC-2024"
    },
    {
      id: 6,
      title: "Access Control Concepts",
      issuer: "Coursera",
      date: "2024",
      category: "security",
      image: imageFiles['Access Control Concepts'],
      description: "Identity and access management principles and implementations",
      credentialId: "ACCESS-2024"
    },
    {
      id: 7,
      title: "Advanced Malware and Network Anomaly Detection",
      issuer: "Coursera",
      date: "2024",
      category: "security",
      image: imageFiles['Advanced Malware and Network Anomaly Detection'],
      description: "Advanced techniques for malware analysis and network anomaly detection",
      credentialId: "MALWARE-2024"
    },
    {
      id: 8,
      title: "Incident Response, BC, and DR Concepts",
      issuer: "Coursera",
      date: "2024",
      category: "security",
      image: imageFiles['Incident Response, BC, and DR Concepts'],
      description: "Business continuity, disaster recovery, and incident response planning",
      credentialId: "INCIDENT-2024"
    },
    {
      id: 9,
      title: "Network Security",
      issuer: "Coursera",
      date: "2024",
      category: "security",
      image: imageFiles['Network Security'],
      description: "Network security fundamentals and advanced protection mechanisms",
      credentialId: "NETSEC-2024"
    },
    {
      id: 10,
      title: "Security Operations",
      issuer: "Coursera",
      date: "2024",
      category: "security",
      image: imageFiles['Security Operations'],
      description: "Security operations center management and monitoring",
      credentialId: "SECOPS-2024"
    },
    
    // CISSP Domain Certifications
    {
      id: 11,
      title: "CISSP Domain 2: Asset Security",
      issuer: "ISC2 / Coursera",
      date: "2024",
      category: "cissp",
      image: imageFiles['CISSP Domain 2: Asset Security'],
      description: "Asset classification, ownership, and protection requirements",
      credentialId: "CISSP-D2-2024"
    },
    {
      id: 12,
      title: "CISSP Domain 3: Security Architecture and Engineering",
      issuer: "ISC2 / Coursera",
      date: "2024",
      category: "cissp",
      image: imageFiles['CISSP Domain 3: Security Architecture and Engineering'],
      description: "Security architecture, engineering, and design principles",
      credentialId: "CISSP-D3-2024"
    },
    {
      id: 13,
      title: "CISSP Domain 4: Communication and Network Security",
      issuer: "ISC2 / Coursera",
      date: "2024",
      category: "cissp",
      image: imageFiles['CISSP Domain 4: Communication and Network Security'],
      description: "Network security and secure communication protocols",
      credentialId: "CISSP-D4-2024"
    },
    {
      id: 14,
      title: "CISSP Domain 5: Identity and Access Management (IAM)",
      issuer: "ISC2 / Coursera",
      date: "2024",
      category: "cissp",
      image: imageFiles['CISSP Domain 5: Identity and Access Management (IAM)'],
      description: "Identity management, authentication, and access control",
      credentialId: "CISSP-D5-2024"
    },
    {
      id: 15,
      title: "CISSP Domain 6: Security Assessment and Testing",
      issuer: "ISC2 / Coursera",
      date: "2024",
      category: "cissp",
      image: imageFiles['CISSP Domain 6: Security Assessment and Testing'],
      description: "Security testing methodologies and assessment techniques",
      credentialId: "CISSP-D6-2024"
    },
    {
      id: 16,
      title: "CISSP Domain 7: Security Operations",
      issuer: "ISC2 / Coursera",
      date: "2024",
      category: "cissp",
      image: imageFiles['CISSP Domain 7: Security Operations'],
      description: "Security operations, monitoring, and incident response",
      credentialId: "CISSP-D7-2024"
    },
    {
      id: 17,
      title: "CISSP Domain 8: Software Development Security",
      issuer: "ISC2 / Coursera",
      date: "2024",
      category: "cissp",
      image: imageFiles['CISSP Domain 8: Software Development Security'],
      description: "Secure software development lifecycle and DevSecOps",
      credentialId: "CISSP-D8-2024"
    },

    // AI/ML Certifications
    {
      id: 18,
      title: "AI for Cybersecurity",
      issuer: "Coursera",
      date: "2024",
      category: "ai",
      image: imageFiles['AI for Cybersecurity'],
      description: "Applied artificial intelligence in cybersecurity contexts",
      credentialId: "AI-CYBER-2024"
    },
    {
      id: 19,
      title: "Introduction to AI for Cybersecurity",
      issuer: "Coursera",
      date: "2024",
      category: "ai",
      image: imageFiles['Introduction to AI for Cybersecurity'],
      description: "Fundamentals of AI applications in cybersecurity",
      credentialId: "INTRO-AI-2024"
    },
    {
      id: 20,
      title: "Securing AI and Advanced Topics",
      issuer: "Coursera",
      date: "2024",
      category: "ai",
      image: imageFiles['Securing AI and Advanced Topics'],
      description: "Advanced AI security and protection mechanisms",
      credentialId: "SECURE-AI-2024"
    },
    {
      id: 21,
      title: "Machine Learning",
      issuer: "Coursera",
      date: "2024",
      category: "ai",
      image: imageFiles['Machine-learning'],
      description: "Comprehensive machine learning algorithms and applications",
      credentialId: "ML-2024"
    },
    {
      id: 22,
      title: "Advanced Learning Algorithms",
      issuer: "Coursera",
      date: "2024",
      category: "ai",
      image: imageFiles['Advanced Learning Algorithms'],
      description: "Advanced machine learning algorithms and optimization",
      credentialId: "ADV-ML-2024"
    },
    {
      id: 23,
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Coursera",
      date: "2024",
      category: "ai",
      image: imageFiles['Supervised Machine Learning: Regression and Classification'],
      description: "Supervised learning techniques for regression and classification",
      credentialId: "SUPER-ML-2024"
    },
    {
      id: 24,
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      issuer: "Coursera",
      date: "2024",
      category: "ai",
      image: imageFiles['Unsupervised Learning, Recommenders, Reinforcement Learning'],
      description: "Unsupervised learning, recommendation systems, and reinforcement learning",
      credentialId: "UNSUPER-ML-2024"
    },
    {
      id: 25,
      title: "Neural Networks and Deep Learning",
      issuer: "Coursera",
      date: "2024",
      category: "ai",
      image: imageFiles['Neural Networks and Deep Learning'],
      description: "Neural networks and deep learning architectures",
      credentialId: "NN-2024"
    },
    {
      id: 26,
      title: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
      issuer: "Coursera",
      date: "2024",
      category: "ai",
      image: imageFiles['Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization'],
      description: "Advanced techniques for optimizing deep neural networks",
      credentialId: "OPT-NN-2024"
    },

    // Mathematics & Programming
    {
      id: 27,
      title: "Calculus for Machine Learning and Data Science",
      issuer: "Coursera",
      date: "2024",
      category: "mathematics",
      image: imageFiles['Calculus for Machine Learning and Data Science'],
      description: "Mathematical foundations of calculus for ML applications",
      credentialId: "CALC-2024"
    },
    {
      id: 28,
      title: "Mathematics for Machine Learning and Data Science",
      issuer: "Coursera",
      date: "2024",
      category: "mathematics",
      image: imageFiles['Mathematics for Machine Learning and Data Science'],
      description: "Mathematical foundations for machine learning and data science",
      credentialId: "MATH-2024"
    },
    {
      id: 29,
      title: "Probability & Statistics for Machine Learning & Data Science",
      issuer: "Coursera",
      date: "2024",
      category: "mathematics",
      image: imageFiles['Probability & Statistics for Machine Learning & Data Science'],
      description: "Statistical methods and probability theory for data science",
      credentialId: "STAT-2024"
    },
    {
      id: 30,
      title: "Linear Algebra",
      issuer: "Coursera",
      date: "2024",
      category: "mathematics",
      image: imageFiles['linear'],
      description: "Linear algebra fundamentals for machine learning",
      credentialId: "LINEAR-2024"
    },
    {
      id: 31,
      title: "Introduction à la programmation orientée objet",
      issuer: "Coursera",
      date: "2024",
      category: "programming",
      image: imageFiles['Introduction à la programmation orientée objet'],
      description: "Object-oriented programming principles and implementation",
      credentialId: "POO-2024"
    },

    // Cryptography
    {
      id: 32,
      title: "Cryptography",
      issuer: "Coursera",
      date: "2024",
      category: "cryptography",
      image: imageFiles['Cryptography'],
      description: "Cryptographic principles and secure communication protocols",
      credentialId: "CRYPTO-2024"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Certifications', count: certifications.length },
    { id: 'security', name: 'Security', count: certifications.filter(c => c.category === 'security').length },
    { id: 'cissp', name: 'CISSP', count: certifications.filter(c => c.category === 'cissp').length },
    { id: 'ai', name: 'AI/ML', count: certifications.filter(c => c.category === 'ai').length },
    { id: 'mathematics', name: 'Mathematics', count: certifications.filter(c => c.category === 'mathematics').length },
    { id: 'programming', name: 'Programming', count: certifications.filter(c => c.category === 'programming').length },
    { id: 'cryptography', name: 'Cryptography', count: certifications.filter(c => c.category === 'cryptography').length }
  ];

  const filteredCertifications = certifications.filter(cert => {
    const matchesCategory = selectedCategory === 'all' || cert.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link 
              to="/"
              className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-mono text-sm">Back to Portfolio</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-mono text-zinc-500">VERIFIED CREDENTIALS</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              Professional <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r tracking-tighter from-cyan-600 to-gray-900 dark:from-cyan-400 dark:to-black">Certifications</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              A comprehensive collection of verified credentials in cybersecurity, artificial intelligence, and cryptographic systems.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center space-y-2">
              <div className="text-3xl font-black text-cyan-400">{certifications.length}</div>
              <div className="text-xs font-mono text-zinc-500 uppercase">Total Certifications</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-black text-purple-400">7</div>
              <div className="text-xs font-mono text-zinc-500 uppercase">Categories</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-black text-green-400">4</div>
              <div className="text-xs font-mono text-zinc-500 uppercase">Issuers</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-black text-orange-400">2024-26</div>
              <div className="text-xs font-mono text-zinc-500 uppercase">Time Period</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="px-6 pb-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
              <input
                type="text"
                placeholder="Search certifications by title, issuer, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.08] transition-all font-mono text-sm"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-mono text-sm transition-all ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-black'
                    : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center">
            <p className="text-sm text-zinc-500 font-mono">
              Showing {filteredCertifications.length} of {certifications.length} certifications
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all cursor-pointer"
                onClick={() => openModal(cert)}
              >
                {/* Image or Placeholder */}
                <div className="aspect-[4/3] overflow-hidden bg-black/50">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${
                      cert.category === 'security' ? 'from-red-500/10 to-orange-500/10' :
                      cert.category === 'cissp' ? 'from-blue-500/10 to-indigo-500/10' :
                      cert.category === 'ai' ? 'from-purple-500/10 to-pink-500/10' :
                      cert.category === 'mathematics' ? 'from-green-500/10 to-emerald-500/10' :
                      cert.category === 'programming' ? 'from-yellow-500/10 to-amber-500/10' :
                      'from-cyan-500/10 to-teal-500/10'
                    }`}>
                      <div className="text-center space-y-4">
                        {cert.category === 'security' && <Shield className="w-16 h-16 text-red-400 mx-auto" />}
                        {cert.category === 'cissp' && <Lock className="w-16 h-16 text-blue-400 mx-auto" />}
                        {cert.category === 'ai' && <Cpu className="w-16 h-16 text-purple-400 mx-auto" />}
                        {cert.category === 'mathematics' && <Calendar className="w-16 h-16 text-green-400 mx-auto" />}
                        {cert.category === 'programming' && <Code className="w-16 h-16 text-yellow-400 mx-auto" />}
                        {cert.category === 'cryptography' && <Award className="w-16 h-16 text-cyan-400 mx-auto" />}
                        <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest px-4">
                          {cert.category}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <Building className="w-3 h-3" />
                      <span className="font-mono uppercase">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <Calendar className="w-3 h-3" />
                      <span className="font-mono">{cert.date}</span>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="text-xs font-mono text-zinc-600">
                      ID: {cert.credentialId}
                    </div>
                    {cert.file ? (
                      <a
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-xs font-mono text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                      >
                        <Download className="w-3 h-3" />
                        View PDF
                      </a>
                    ) : (
                      <button className="flex items-center gap-2 px-3 py-2 bg-green-500/10 border border-green-500/20 rounded-lg text-xs font-mono text-green-400 hover:bg-green-500/20 transition-colors">
                        <Award className="w-3 h-3" />
                        Verified
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedCertification && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] bg-black/90 border border-white/20 rounded-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Image */}
            <div className="p-8">
              <img
                src={selectedCertification.image}
                alt={selectedCertification.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
            </div>

            {/* Info */}
            <div className="px-8 pb-8 space-y-4">
              <h3 className="text-xl font-bold text-white">{selectedCertification.title}</h3>
              <div className="flex items-center gap-4 text-sm text-zinc-400">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  <span>{selectedCertification.issuer}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedCertification.date}</span>
                </div>
              </div>
              <p className="text-zinc-300">{selectedCertification.description}</p>
              <div className="text-xs font-mono text-zinc-500">
                Credential ID: {selectedCertification.credentialId}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="text-sm text-zinc-500 font-mono">
            All credentials are verifiable. Contact for detailed verification process.
          </p>
          <div className="flex items-center justify-center gap-6 text-xs text-zinc-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Blockchain Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <ExternalLink className="w-3 h-3" />
              <span>Publicly Accessible</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Certifications;
