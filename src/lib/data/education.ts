import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'BE in Electronics and Instrumentation',
		description: '',
		location: 'Coimbatore',
		logo: Assets.Unknown,
		name: '',
		organization: 'Anna University',
		period: { from: new Date(2015, 6, 1), to: new Date(2019, 3, 1) },
		shortDescription: '',
		slug: 'be-eie',
		subjects: []
	}
];

export const title = 'Education';
