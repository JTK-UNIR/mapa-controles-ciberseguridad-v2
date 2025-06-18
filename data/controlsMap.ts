const controls: {
  category: string;
  pci: string;
  iso: string;
  description: string;
}[] = [
  {
    category: "Security policies & operational procedures",
    pci: "1.1.1",
    iso: "A.12.1.1",
    description: "Documented operating procedures"
  },
  {
    category: "System changes follow established procedures",
    pci: "6.5.1",
    iso: "A.12.1.2, A.14.2.2, A.14.2.3, A.14.2.4",
    description: "Change management"
  },
  {
    category: "Selective enabling & disabling of necessary services & functionality",
    pci: "2.2.4",
    iso: "A.12.1.3",
    description: "Capacity management"
  },
  {
    category: "Separation of production & pre-production environments",
    pci: "6.5.3",
    iso: "A.12.1.4",
    description: "Separation of development, test, & operational environments"
  },
  {
    category: "Anti-malware deployment (non-vulnerable components excluded)",
    pci: "5.2.1",
    iso: "A.12.2.1",
    description: "Protection against malware"
  },
  {
    category: "Offline media backups stored securely",
    pci: "9.4.1.1",
    iso: "A.12.3.1",
    description: "Information backup"
  },
  {
    category: "Review of offline media backup location(s)",
    pci: "9.4.1.2",
    iso: "A.12.3.1",
    description: "No Map"
  },
  {
    category: "Audit logs reviewed daily",
    pci: "10.4.1",
    iso: "A.12.4.1",
    description: "Logging"
  },
  {
    category: "Logs of other system components reviewed periodically",
    pci: "10.4.2",
    iso: "A.12.4.1",
    description: "Logging"
  },
  {
    category: "Daily security reviews",
    pci: "10.4.1",
    iso: "A.12.4.1",
    description: "Monitoring activities"
  },
  {
    category: "System clocks synchronized with time tech",
    pci: "10.6.1",
    iso: "A.12.4.4",
    description: "Clock Synchronization"
  },
  {
    category: "End-user technology policies",
    pci: "12.2.1",
    iso: "A.12.5.1",
    description: "Installation of software on operational systems"
  },
  {
    category: "Security vulnerabilities addressed",
    pci: "6.3",
    iso: "A.12.6.1",
    description: "Management of technical vulnerabilities"
  },
  {
    category: "Apply secure configurations to all system components",
    pci: "2.1",
    iso: "A.8.8",
    description: "Management of technical vulnerabilities"
  },
  {
    category: "System components configured & managed securely",
    pci: "2.2",
    iso: "A.8.9",
    description: "Configuration management"
  },
  {
    category: "Wireless environments configured & managed securely",
    pci: "2.3",
    iso: "A.8.9",
    description: "Configuration management"
  },
{
  category: "Account data storage: retention, disposal, coverage, secure deletion, verification.",
  pci: "3.2.1",
  iso: "A.8.10",
  description: "Information deletion"
},
{
  category: "PAN masking: limited display to authorized personnel, BIN & last four digits.",
  pci: "3.4.1",
  iso: "A.8.11",
  description: "Data masking"
},
{
  category: "Prevention of cleartext PAN leakage: active detection, logging, & alerts.",
  pci: "A3.2.6",
  iso: "A.8.12",
  description: "Data leakage prevention"
},
{
  category: "Exceptions & anomalies identified during the review process are addressed. Automated mechanisms are used to perform audit log reviews.",
  pci: "10.4.3 / 10.4.1.1",
  iso: "A.12.7.1",
  description: "Protection of information systems during audit testing"
},
{
  category: "Policies & procedures documented, updated, used, & known.",
  pci: "4.1.1",
  iso: "A.13.2.1 / A.13.2.2 / A.13.2.3",
  description: "Information transfer"
},
{
  category: "Documented, updated, used, known security policies & procedures.",
  pci: "3.1.1",
  iso: "A.13.2.4",
  description: "Confidentiality or non-disclosure agreements"
},
{
  category: "NSC ruleset configuration standards: defined, implemented, maintained.",
  pci: "1.2.1",
  iso: "A.13.1.1",
  description: "Networks security"
},
{
  category: "Network connections between trusted & untrusted networks are controlled.",
  pci: "1.4",
  iso: "A.13.1.2",
  description: "Security of network services"
},
{
  category: "NSC ruleset configuration standards: defined, implemented, maintained.",
  pci: "1.2.1",
  iso: "A.13.1.3",
  description: "Segregation of networks"
},
{
  category: "Processes & automated mechanisms are in place to detect & protect personnel against phishing attacks.",
  pci: "5.4.1",
  iso: "A.8.23",
  description: "Web filtering"
},
{
  category: "Security policies & operational procedures must be: Documented, up-to-date, in use, & known to all parties.",
  pci: "1.1.1",
  iso: "A.12.1.1",
  description: "Documented operating procedures"
},
{
  category: "System changes follow established procedures, including documentation, approval, & testing.",
  pci: "6.5.1",
  iso: "A.14.2.2 / A.14.2.3 / A.14.2.4",
  description: "Change management"
},
{
  category: "Selective enabling & disabling of necessary services & functionality.",
  pci: "2.2.4",
  iso: "A.12.1.3",
  description: "Capacity management"
},
{
  category: "Pre-production environments are separated from production environments & the separation is enforced with access controls.",
  pci: "6.5.3",
  iso: "A.12.1.4",
  description: "Separation of development, test, & operational environments"
},
{
  category: "Anti-malware deployed on all components, except non-vulnerable ones.",
  pci: "5.2.1",
  iso: "A.12.2.1",
  description: "Protection against malware"
},
{
  category: "Offline media backups with cardholder data are stored in a secure location.",
  pci: "9.4.1.1",
  iso: "A.12.3.1",
  description: "Information backup"
},
{
  category: "The security of the offline media backup location(s) with cardholder data is reviewed at least once every 12 months.",
  pci: "9.4.1.2",
  iso: "A.12.3.1",
  description: "No Map"
},
{
  category: "Audit logs reviewed daily: security events, CHD/SAD, critical components, security functions.",
  pci: "10.4.1",
  iso: "A.12.4.1",
  description: "Logging"
},
{
  category: "Logs of all other system components (those not specified in Requirement 10.4.1) are reviewed periodically.",
  pci: "10.4.2",
  iso: "A.12.4.1",
  description: "Logging"
},
{
  category: "Daily review: security events, CHD/SAD, critical components, security functions.",
  pci: "10.4.1",
  iso: "A.12.4.1",
  description: "Monitoring activities"
},
{
  category: "System clocks & time are synchronized using time-synchronization technology.",
  pci: "10.6.1",
  iso: "A.12.4.4",
  description: "Clock synchronization"
},
{
  category: "End-user technology policies: approved use, authorized parties, approved products.",
  pci: "12.2.1",
  iso: "A.12.5.1",
  description: "Installation of software on operational systems"
},
{
  category: "Security vulnerabilities are identified & addressed.",
  pci: "6.3",
  iso: "A.12.6.1",
  description: "Management of technical vulnerabilities"
},
{
  category: "Processes & mechanisms for applying secure configurations to all system components are defined & understood.",
  pci: "2.1",
  iso: "A.8.9",
  description: "Configuration management"
},
{
  category: "System components are configured & managed securely.",
  pci: "2.2",
  iso: "A.8.9",
  description: "Configuration management"
},
{
  category: "Wireless environments are configured & managed securely.",
  pci: "2.3",
  iso: "A.8.9",
  description: "Configuration management"
},
{
  category: "Account data storage: retention, disposal, coverage, secure deletion, verification.",
  pci: "3.2.1",
  iso: "A.8.10",
  description: "Information deletion"
},
{
  category: "PAN masking: limited display to authorized personnel, BIN & last four digits.",
  pci: "3.4.1",
  iso: "A.8.11",
  description: "Data masking"
},
{
  category: "Prevention of cleartext PAN leakage: active detection, logging, & alerts.",
  pci: "A3.2.6",
  iso: "A.8.12",
  description: "Data leakage prevention"
},
{
  category: "Exceptions & anomalies identified during the review process are addressed. Automated mechanisms are used to perform audit log reviews.",
  pci: "10.4.1.1",
  iso: "A.12.7.1",
  description: "Protection of information systems during audit testing"
},
{
  category: "Policies & procedures documented, updated, used, & known.",
  pci: "4.1.1",
  iso: "A.13.2.1 / A.13.2.2 / A.13.2.3",
  description: "Information transfer"
},
{
  category: "Documented, updated, used, known security policies & procedures.",
  pci: "3.1.1",
  iso: "A.13.2.4",
  description: "Confidentiality or non-disclosure agreements"
},
{
  category: "NSC ruleset configuration standards: defined, implemented, maintained.",
  pci: "1.2.1",
  iso: "A.13.1.1",
  description: "Networks security"
},
{
  category: "Network connections between trusted & untrusted networks are controlled.",
  pci: "1.4",
  iso: "A.13.1.2",
  description: "Security of network services"
},
{
  category: "NSC ruleset configuration standards: defined, implemented, maintained.",
  pci: "1.2.1",
  iso: "A.13.1.3",
  description: "Segregation of networks"
},
{
  category: "Processes & automated mechanisms are in place to detect & protect personnel against phishing attacks.",
  pci: "5.4.1",
  iso: "A.8.23",
  description: "Web filtering"
},
{
  category: "Public-facing web applications: vulnerability assessment or automated attack prevention.",
  pci: "6.4.1",
  iso: "A.14.1.2",
  description: "Application security requirements"
},
{
  category: "Secure development: industry standards, PCI DSS, throughout software lifecycle.",
  pci: "6.2.1",
  iso: "A.14.2.1",
  description: "Secure development life cycle"
},
{
  category: "Processes & mechanisms for developing & maintaining secure systems & software are defined & understood.",
  pci: "6.1",
  iso: "A.14.2.5",
  description: "Secure system architecture & engineering principles"
},
{
  category: "Software review: code adherence, vulnerability identification, corrective implementation before release.",
  pci: "6.2.3",
  iso: "A.14.2.8",
  description: "Secure coding"
},
{
  category: "Software review: code adherence, vulnerability identification, corrective implementation before release.",
  pci: "6.2.3",
  iso: "A.14.2.9",
  description: "Security testing in development & acceptance"
},
{
  category: "Software review: code adherence, vulnerability identification, corrective implementation before release.",
  pci: "6.2.3",
  iso: "A.14.2.7",
  description: "Outsourced development"
},
{
  category: "Test data & test accounts are removed from system components before the system goes into production.",
  pci: "6.5.6",
  iso: "A.14.3.1",
  description: "Test information"
},
{
  category: "Test data & test accounts are removed from system components before the system goes into production.",
  pci: "6.5.6",
  iso: "A.14.3.1",
  description: "Test information"
},
{
  category: "Public-facing web applications: vulnerability assessment or automated attack prevention.",
  pci: "6.4.1",
  iso: "A.14.1.2",
  description: "Application security requirements"
},
{
  category: "Secure development: industry standards, PCI DSS, throughout software lifecycle.",
  pci: "6.2.1",
  iso: "A.14.2.1",
  description: "Secure development life cycle"
},
{
  category: "Processes & mechanisms for developing & maintaining secure systems & software are defined & understood.",
  pci: "6.1",
  iso: "A.14.2.5",
  description: "Secure system architecture & engineering principles"
},
{
  category: "Software review: code adherence, vulnerability identification, corrective implementation before release.",
  pci: "6.2.3",
  iso: "A.14.2.8",
  description: "Secure coding"
},
{
  category: "Software review: code adherence, vulnerability identification, corrective implementation before release.",
  pci: "6.2.3",
  iso: "A.14.2.9",
  description: "Security testing in development & acceptance"
},
{
  category: "Software review: code adherence, vulnerability identification, corrective implementation before release.",
  pci: "6.2.3",
  iso: "A.14.2.7",
  description: "Outsourced development"
},
{
  category: "Test data & test accounts are removed from system components before the system goes into production.",
  pci: "6.5.6",
  iso: "A.14.3.1",
  description: "Test information"
},
{
  category: "Security policies & operational procedures must be: Documented, up-to-date, in use, & known to all parties.",
  pci: "1.1.1",
  iso: "A.12.1.1",
  description: "Documented operating procedures"
},
{
  category: "System changes follow established procedures, including documentation, approval, & testing.",
  pci: "6.5.1",
  iso: "A.12.1.2 / A.14.2.2 / A.14.2.3 / A.14.2.4",
  description: "Change management"
},
{
  category: "Selective enabling & disabling of necessary services & functionality.",
  pci: "2.2.4",
  iso: "A.12.1.3",
  description: "Capacity management"
},
{
  category: "Pre-production environments are separated from production environments & the separation is enforced with access controls.",
  pci: "6.5.3",
  iso: "A.12.1.4",
  description: "Separation of development, test, & operational environments"
},
{
  category: "Anti-malware deployed on all components, except non-vulnerable ones.",
  pci: "5.2.1",
  iso: "A.12.2.1",
  description: "Protection against malware"
},
{
  category: "Offline media backups with cardholder data are stored in a secure location.",
  pci: "9.4.1.1",
  iso: "A.12.3.1",
  description: "Information backup"
},
{
  category: "The security of the offline media backup location(s) with cardholder data is reviewed at least once every 12 months.",
  pci: "9.4.1.2",
  iso: "",
  description: "No Map"
},
{
  category: "Audit logs reviewed daily: security events, CHD/SAD, critical components, security functions.",
  pci: "10.4.1",
  iso: "A.12.4.1",
  description: "Logging"
},
{
  category: "Logs of all other system components (those not specified in Requirement 10.4.1) are reviewed periodically.",
  pci: "10.4.2",
  iso: "A.12.4.1",
  description: "Logging"
},
{
  category: "Audit logs reviewed daily: security events, CHD/SAD, critical components, security functions.",
  pci: "10.4.1",
  iso: "A.12.4.1",
  description: "Monitoring activities"
},
{
  category: "System clocks & time are synchronized using time-synchronization technology.",
  pci: "10.6.1",
  iso: "A.12.4.4",
  description: "Clock Synchronization"
},
{
  category: "End-user technology policies: approved use, authorized parties, approved products.",
  pci: "12.2.1",
  iso: "A.12.5.1",
  description: "Installation of software on operational systems"
},
{
  category: "Security vulnerabilities are identified & addressed.",
  pci: "6.3",
  iso: "A.12.6.1",
  description: "Management of technical vulnerabilities"
},
{
  category: "Processes & mechanisms for applying secure configurations to all system components are defined & understood.",
  pci: "2.1",
  iso: "A.8.9",
  description: "Configuration management"
},
{
  category: "System components are configured & managed securely.",
  pci: "2.2",
  iso: "A.8.9",
  description: "Configuration management"
},
{
  category: "Wireless environments are configured & managed securely.",
  pci: "2.3",
  iso: "A.8.9",
  description: "Configuration management"
},
{
  category: "Account data storage: retention, disposal, coverage, secure deletion, verification.",
  pci: "3.2.1",
  iso: "A.8.10",
  description: "Information deletion"
},
{
  category: "PAN masking: limited display to authorized personnel, BIN & last four digits.",
  pci: "3.4.1",
  iso: "A.8.11",
  description: "Data masking"
},
{
  category: "Prevention of cleartext PAN leakage: active detection, logging, & alerts.",
  pci: "A3.2.6",
  iso: "A.8.12",
  description: "Data leakage prevention"
},
{
  category: "Exceptions & anomalies identified during the review process are addressed. Automated mechanisms are used to perform audit log reviews.",
  pci: "10.4.3 / 10.4.1.1",
  iso: "A.12.7.1",
  description: "Protection of information systems during audit testing"
},
{
  category: "Policies & procedures documented, updated, used, & known.",
  pci: "4.1.1",
  iso: "A.13.2.1 / A.13.2.2 / A.13.2.3",
  description: "Information transfer"
},
{
  category: "Documented, updated, used, known security policies & procedures.",
  pci: "3.1.1",
  iso: "A.13.2.4",
  description: "Confidentiality or non-disclosure agreements"
},
{
  category: "NSC ruleset configuration standards: defined, implemented, maintained.",
  pci: "1.2.1",
  iso: "A.13.1.1",
  description: "Networks security"
},
{
  category: "Network connections between trusted & untrusted networks are controlled.",
  pci: "1.4",
  iso: "A.13.1.2",
  description: "Security of network services"
},
{
  category: "NSC ruleset configuration standards: defined, implemented, maintained.",
  pci: "1.2.1",
  iso: "A.13.1.3",
  description: "Segregation of networks"
},
{
  category: "Processes & automated mechanisms are in place to detect & protect personnel against phishing attacks.",
  pci: "5.4.1",
  iso: "A.8.23",
  description: "Web filtering"
},
{
  category: "Security policies & operational procedures must be: Documented, up-to-date, in use, & known to all parties.",
  pci: "1.1.1",
  iso: "A.12.1.1",
  description: "Documented operating procedures"
},
{
  category: "System changes follow established procedures, including documentation, approval, & testing.",
  pci: "6.5.1",
  iso: "A.12.1.2 / A.14.2.2 / A.14.2.3 / A.14.2.4",
  description: "Change management"
},
{
  category: "Selective enabling & disabling of necessary services & functionality.",
  pci: "2.2.4",
  iso: "A.12.1.3",
  description: "Capacity management"
},
{
  category: "Pre-production environments are separated from production environments & the separation is enforced with access controls.",
  pci: "6.5.3",
  iso: "A.12.1.4",
  description: "Separation of development, test, & operational environments"
},
{
  category: "Anti-malware deployed on all components, except non-vulnerable ones.",
  pci: "5.2.1",
  iso: "A.12.2.1",
  description: "Protection against malware"
},
{
  category: "Offline media backups with cardholder data are stored in a secure location.",
  pci: "9.4.1.1",
  iso: "A.12.3.1",
  description: "Information backup"
},
{
  category: "The security of the offline media backup location(s) with cardholder data is reviewed at least once every 12 months.",
  pci: "9.4.1.2",
  iso: "",
  description: "No Map"
},
{
  category: "Audit logs reviewed daily: security events, CHD/SAD, critical components, security functions.",
  pci: "10.4.1",
  iso: "A.12.4.1",
  description: "Logging"
},
{
  category: "Logs of all other system components (those not specified in Requirement 10.4.1) are reviewed periodically.",
  pci: "10.4.2",
  iso: "A.12.4.1",
  description: "Logging"
},
{
  category: "Audit logs reviewed daily: security events, CHD/SAD, critical components, security functions.",
  pci: "10.4.1",
  iso: "A.12.4.1",
  description: "Monitoring activities"
},
{
  category: "System clocks & time are synchronized using time-synchronization technology.",
  pci: "10.6.1",
  iso: "A.12.4.4",
  description: "Clock Synchronization"
},
{
  category: "End-user technology policies: approved use, authorized parties, approved products.",
  pci: "12.2.1",
  iso: "A.12.5.1",
  description: "Installation of software on operational systems"
},
{
  category: "Security vulnerabilities are identified & addressed.",
  pci: "6.3",
  iso: "A.12.6.1",
  description: "Management of technical vulnerabilities"
},
{
  category: "Processes & mechanisms for applying secure configurations to all system components are defined & understood.",
  pci: "2.1",
  iso: "A.8.9",
  description: "Configuration management"
},
{
  category: "System components are configured & managed securely.",
  pci: "2.2",
  iso: "A.8.9",
  description: "Configuration management"
},
{
  category: "Wireless environments are configured & managed securely.",
  pci: "2.3",
  iso: "A.8.9",
  description: "Configuration management"
},
{
  category: "Requirement 9: Documented, updated, used, known security policies & procedures.",
  pci: "9.1.1",
  iso: "A.11.1.1",
  description: "Physical security perimeters"
},
{
  category: "All media with cardholder data is physically secured.",
  pci: "9.4.1",
  iso: "A.11.1.2",
  description: "Physical entry"
},
{
  category: "Appropriate facility entry controls are in place to restrict physical access to systems in the CDE.",
  pci: "9.2.1",
  iso: "A.11.1.2",
  description: "Physical entry"
},
{
  category: "Access to consoles in sensitive areas is restricted via locking when not in use.",
  pci: "9.2.4",
  iso: "A.11.1.3",
  description: "Securing offices, rooms & facilities"
},
{
  category: "Physical access monitoring: entry/exit points, tamper protection, data storage.",
  pci: "9.2.1.1",
  iso: "A.11.1.3",
  description: "Physical security monitoring"
},
{
  category: "All media with cardholder data is physically secured.",
  pci: "9.4.1",
  iso: "A.11.1.4",
  description: "Protecting against physical & environmental threats"
},
{
  category: "Offline media backups with cardholder data are stored in a secure location.",
  pci: "9.4.1.1",
  iso: "A.11.1.4",
  description: "Protecting against physical & environmental threats"
},
{
  category: "Access to consoles in sensitive areas is restricted via locking when not in use.",
  pci: "9.2.4",
  iso: "A.11.1.5",
  description: "Working in secure areas"
},
{
  category: "Physical access management: personnel identification, access changes, revocation, authorized control.",
  pci: "9.3.1",
  iso: "A.11.1.5",
  description: "Working in secure areas"
},
{
  category: "Secured media transport: logged, tracked, offsite location details.",
  pci: "9.4.3",
  iso: "A.11.2.6",
  description: "Security of assets off-premises"
},
{
  category: "An inventory of system components that are in scope for PCI DSS, including a description of function/use, is maintained & kept current.",
  pci: "12.5.1",
  iso: "A.11.2.2",
  description: "Supporting utilities"
},
{
  category: "POI device protection: listing, inspection, personnel training for tampering.",
  pci: "9.5.1",
  iso: "A.11.2.3",
  description: "Cabling security"
},
{
  category: "An inventory of system components that are in scope for PCI DSS, including a description of function/use, is maintained & kept current.",
  pci: "12.5.1",
  iso: "A.11.2.4",
  description: "Equipment maintenance"
},
{
  category: "Secure disposal or re-use of equipment.",
  pci: "",
  iso: "A.11.2.7",
  description: "Secure disposal or re-use of equipment"
},
{
  category: "Security policies & operational procedures must be: Documented, up-to-date, in use.",
  pci: "1.1.1",
  iso: "A.12.1.1",
  description: "Documented operating procedures"
},
{
  category: "System changes follow established procedures, including documentation, approval, & testing.",
  pci: "6.5.1",
  iso: "A.12.1.2, A.14.2.2, A.14.2.3, A.14.2.4",
  description: "Change management"
},
{
  category: "Selective enabling & disabling of necessary services & functionality.",
  pci: "2.2.4",
  iso: "A.12.1.3",
  description: "Capacity management"
},
{
  category: "Pre-production environments are separated from production environments & the separation is enforced with access controls.",
  pci: "6.5.3",
  iso: "A.12.1.4",
  description: "Separation of development, test, & operational environments"
},
{
  category: "Anti-malware deployed on all components, except non-vulnerable ones.",
  pci: "5.2.1",
  iso: "A.12.2.1",
  description: "Protection against malware"
},
{
  category: "Offline media backups with cardholder data are stored in a secure location.",
  pci: "9.4.1.1",
  iso: "A.12.3.1",
  description: "Information backup"
},
{
  category: "The security of the offline media backup location(s) with cardholder data is reviewed at least once every 12 months.",
  pci: "9.4.1.2",
  iso: "",
  description: "No Map"
},
{
  category: "Audit logs reviewed daily: security events, CHD/SAD, critical components, security functions.",
  pci: "10.4.1",
  iso: "A.12.4.1",
  description: "Logging"
},
{
  category: "Logs of all other system components (those not specified in Requirement 10.4.1) are reviewed periodically.",
  pci: "10.4.2",
  iso: "A.12.4.1",
  description: "Logging"
},
{
  category: "Audit logs reviewed daily: security events, CHD/SAD, critical components, security functions.",
  pci: "10.4.1",
  iso: "A.12.4.1",
  description: "Monitoring activities"
},
{
  category: "System clocks & time are synchronized using time-synchronization technology.",
  pci: "10.6.1",
  iso: "A.12.4.4",
  description: "Clock Synchronization"
},
{
  category: "End-user technology policies: approved use, authorized parties, approved products.",
  pci: "12.2.1",
  iso: "A.12.5.1",
  description: "Installation of software on operational systems"
},
{
  category: "Security vulnerabilities are identified & addressed.",
  pci: "6.3",
  iso: "A.12.6.1",
  description: "Management of technical vulnerabilities"
},
{
  category: "Processes & mechanisms for applying secure configurations to all system components are defined & understood.",
  pci: "2.1",
  iso: "A.8.9",
  description: "Configuration management"
},
{
  category: "System components are configured & managed securely.",
  pci: "2.2",
  iso: "A.8.9",
  description: "Configuration management"
},
{
  category: "Wireless environments are configured & managed securely.",
  pci: "2.3",
  iso: "",
  description: "Configuration management"
},
{
  category: "Account data storage: retention, disposal, coverage, secure deletion, verification. PAN masking: limited display to authorized personnel, BIN & last four digits.",
  pci: "3.2.1, 3.4.1",
  iso: "A.8.10, A.8.11",
  description: "Information deletion, Data masking"
},
{
  category: "Prevention of cleartext PAN leakage: active detection, logging, & alerts.",
  pci: "A3.2.6",
  iso: "A.8.12",
  description: "Data leakage prevention"
},
{
  category: "Exceptions & anomalies identified during the review process are addressed. Automated mechanisms are used to perform audit log reviews.",
  pci: "10.4.3, 10.4.1.1",
  iso: "A.12.7.1",
  description: "Protection of information systems during audit testing"
},
{
  category: "Policies & procedures documented, updated, used, & known.",
  pci: "4.1.1",
  iso: "A.13.2.1, A.13.2.2, A.13.2.3",
  description: "Information transfer"
},
{
  category: "Documented, updated, used, known security policies & procedures.",
  pci: "3.1.1",
  iso: "A.13.2.4",
  description: "Confidentiality or non-disclosure agreements"
},
{
  category: "NSC ruleset configuration standards: defined, implemented, maintained.",
  pci: "1.2.1",
  iso: "A.13.1.1",
  description: "Networks security"
},
{
  category: "Network connections between trusted & untrusted networks are controlled.",
  pci: "1.4",
  iso: "A.13.1.2",
  description: "Security of network services"
},
{
  category: "NSC ruleset configuration standards: defined, implemented, maintained.",
  pci: "1.2.1",
  iso: "A.13.1.3",
  description: "Segregation of networks"
},
{
  category: "Processes & automated mechanisms are in place to detect & protect personnel against phishing attacks.",
  pci: "5.4.1",
  iso: "A.8.23",
  description: "Web filtering"
},
{
  category: "Public-facing web applications: vulnerability assessment or automated attack prevention.",
  pci: "6.4.1",
  iso: "A.14.1.2",
  description: "Application"
},
{
  category: "Secure development: industry standards, PCI DSS, throughout software lifecycle.",
  pci: "6.2.1",
  iso: "A.14.2.1",
  description: "Secure development life cycle"
},
{
  category: "Processes & mechanisms for developing & maintaining secure systems & software are defined & understood.",
  pci: "6.1",
  iso: "A.14.2.5",
  description: "Secure system architecture & engineering principles"
},
{
  category: "Software review: code adherence, vulnerability identification, corrective implementation before release.",
  pci: "6.2.3",
  iso: "A.14.2.8",
  description: "Secure coding"
},
{
  category: "Software review: code adherence, vulnerability identification, corrective implementation before release.",
  pci: "6.2.3",
  iso: "A.14.2.8",
  description: "Security testing in development & acceptance"
},
{
  category: "Software review: code adherence, vulnerability identification, corrective implementation before release.",
  pci: "6.2.3",
  iso: "A.14.2.7",
  description: "Outsourced development"
},
{
  category: "Test data & test accounts are removed from system components before the system goes into production.",
  pci: "6.5.6",
  iso: "A.14.3.1",
  description: "Test information"
},
{
  category: "Clear security policy: defined roles, personnel awareness & acknowledgment.",
  pci: "12.1.3",
  iso: "A.6.1.1",
  description: "Information security roles & responsibilities"
},
{
  category: "Separation of roles: production vs. pre-production, reviewed/approved changes deployment.",
  pci: "6.5.4",
  iso: "A.6.1.2",
  description: "Segregation of duties"
},
{
  category: "System changes follow established procedures, including documentation, approval, & testing.",
  pci: "6.5.1",
  iso: "A.6.1.3",
  description: "Contact with authorities"
},
{
  category: "Flexible requirement support: documented risk analysis, asset/threat identification, periodic review.",
  pci: "12.3.1",
  iso: "A.6.1.4",
  description: "Contact with special interest groups"
},
{
  category: "Flexible requirement support: documented risk analysis, asset/threat identification, periodic review.",
  pci: "12.3.1",
  iso: "A.6.1.5",
  description: "Information security in project management"
},
{
  category: "All non-console administrative access is encrypted using strong cryptography. Additional requirement for service providers only: Service providers with remote access to customer premises use unique authentication factors for each customer premises.",
  pci: "2.2.7, 8.2.3",
  iso: "A.6.2.2",
  description: "Remote working"
},
{
  category: "MFA for remote network access: personnel & third parties.",
  pci: "8.4.3",
  iso: "",
  description: ""
},
{
  category: "A comprehensive information security policy that governs & provides direction for protection of the entity’s information assets is known & current.",
  pci: "12.1",
  iso: "A.18.1.1, A.18.1.5",
  description: "Legal, statutory, regulatory & contractual requirements"
},
{
  category: "A comprehensive information security policy that governs & provides direction for protection of the entity’s information assets is known & current.",
  pci: "12.1",
  iso: "A.18.1.2",
  description: "Intellectual property rights"
},
{
  category: "Cryptographic keys used to protect stored account data are secured.",
  pci: "3.6",
  iso: "A.18.1.3",
  description: "Protection of records"
},
{
  category: "PAN is made unreadable using one-way hashes, truncation, index tokens, or strong cryptography with key management processes.",
  pci: "3.5.1",
  iso: "A.18.1.4",
  description: "Privacy & protection of personal identifiable information (PII)"
},
{
  category: "Security controls on computing devices: configuration, active, authorized alterations.",
  pci: "1.5.1",
  iso: "A.6.2.1",
  description: "User end point devices"
},
{
  category: "A comprehensive information security policy that governs & provides direction for protection of the entity’s information assets is known & current.",
  pci: "12.1",
  iso: "A.5.1.1",
  description: "Policies for information security"
}


];

export default controls;
