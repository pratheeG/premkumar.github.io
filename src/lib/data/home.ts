import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Premkumar';

export const description =
	'I am a passionate Full-Stack Developer from India, with over 5 years of experience in delivering high-quality solutions to global clients. My expertise spans JavaScript frameworks like React, Angular 7+, and Node.js, coupled with backend development using Express.js, NestJS, and Python. I specialize in cloud infrastructure (AWS, GCP), DevOps (Docker, Kubernetes, CI/CD), and microservices architecture. With a strong focus on event-driven systems, data processing, and automation, I strive to build scalable, efficient, and secure applications for diverse industries.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/pratheeG' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/premkumar-manokaran-fullstack-dev/'
	}
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'angular', 'sass', 'ts', 'node', 'nest', 'kubernetes','docker');
