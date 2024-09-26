import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'thoughtworks-app-dev',
		company: 'Thoughtworks Technologies Pvt Ltd',
		description: 'Designed an event-driven architecture for automating Workday data processing with KafkaJs for seamless data streaming. Developed an employee compensation automation tool, improving payroll accuracy. Following SOLID principles and TDD, enhanced scalability. Collaborated with InfoSec for security, and led cost-cutting initiatives, reducing development and maintenance expenses.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Bangalore',
		period: { from: new Date(2022, 3, 0) },
		skills: getSkills('ts', 'js', 'reactjs', 'node', 'expressjs', 'aws', 'gcp', 'docker', 'kubernetes', 'nest'),
		name: 'Application Developer',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Enhanced Data Sharing and Compensation Management'
	},
	{
		slug: 'research-grid-full-stack-dev',
		company: 'Research Grid Pvt Ltd',
		description: 'Automated document processing for clinical trials reduced processing time from months to minutes, ensuring HIPAA, GDPR, and OWASP compliance. Integrated AI tools improved efficiency and accuracy, while Stripe integration and CI/CD pipelines enhanced payment handling and streamlined development, boosting operational efficiency and compliance in trial management.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date(2020, 4, 0), to: new Date(2022, 3, 0) },
		skills: getSkills('ts', 'sass', 'css', 'html', 'js', 'angular', 'aws', 'node', 'express'),
		name: 'Full-Stack Developer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Streamlined Clinical Trial Automation'
	},
	{
		slug: 'full-stack-dev-squash-apps',
		company: 'Squash Apps Pvt Ltd',
		description: 'Developed and maintained a scalable Software-as-a-Service (SaaS) application leveraging a microservices architecture for improved performance and maintainability.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Coimbatore',
		period: { from: new Date(2019, 3, 0), to: new Date(2020, 1, 0) },
		skills: getSkills('css', 'html', 'js', 'node', 'angular', 'mysql', 'mongodb'),
		name: 'Full-Stack Developer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Built and Maintained Scalable SaaS Application'
	},
	{
		slug: 'intern-full-stack-dev-squash-apps',
		company: 'Squash Apps Pvt Ltd',
		description: 'Trained as a Mean stack developer and started to contribute to the mini projects.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Coimbatore',
		period: { from: new Date(2018, 7, 0), to: new Date(2019, 2, 0) },
		skills: getSkills('css', 'html', 'js', 'node', 'angular', 'mysql', 'mongodb'),
		name: 'Intern Full-Stack Developer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	}
];

export const title = 'Experience';
