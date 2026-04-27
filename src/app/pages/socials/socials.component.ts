import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	imports: [NgOptimizedImage],
	templateUrl: './socials.component.html',
	styleUrl: './socials.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialsComponent {
	protected readonly socialLinks = [
		{
			label: 'Instagram',
			handle: '@blomanjeloungecafe',
			description: 'Фото страв, reels, новинки меню та атмосфера закладу.',
			href: 'https://www.instagram.com/blomanjeloungecafe/',
			ariaLabel: 'Відкрити Instagram Blomanzhe Lounge Cafe',
		},
		{
			label: 'Facebook',
			handle: '/LoungeCafeBlomanje',
			description: 'Новини, події, меню та спеціальні пропозиції кафе.',
			href: 'https://www.facebook.com/LoungeCafeBlomanje/',
			ariaLabel: 'Відкрити Facebook Blomanzhe Lounge Cafe',
		},
		{
			label: 'Меню',
			handle: 'ChoiceQR',
			description: 'Онлайн-меню з актуальними категоріями та позиціями закладу.',
			href: 'https://blomanjeloungecafe.choiceqr.com/online-menu',
			ariaLabel: 'Відкрити онлайн-меню Blomanzhe',
		},
		{
			label: 'Tripadvisor',
			handle: 'Lounge Cafe Blomanje',
			description: 'Сторінка з відгуками гостей та загальним рейтингом ресторану.',
			href: 'https://www.tripadvisor.com/Restaurant_Review-g659293-d8603673-Reviews-Lounge_Cafe_Blomanje-Kamianets_Podilskyi_Khmelnytskyi_Oblast.html',
			ariaLabel: 'Відкрити Tripadvisor Blomanzhe Lounge Cafe',
		},
	] as const;
}
