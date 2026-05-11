import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TranslateService } from '@wawjs/ngx-translate';
import { LanguageService } from '../../feature/language/language.service';

@Component({
	imports: [NgOptimizedImage],
	templateUrl: './socials.component.html',
	styleUrl: './socials.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialsComponent {
	private readonly _languageService = inject(LanguageService);
	private readonly _translateService = inject(TranslateService);

	protected readonly content = computed(() => {
		this._languageService.language();

		return {
			heroLabel: this._t('Social networks and contacts'),
			heroDescription: this._t(
				'Current restaurant contacts in Kamianets-Podilskyi: phone, address, opening hours, official menu, and verified social pages.',
			),
			callLabel: this._t('Call Blomanzhe'),
			phoneTitle: this._t('Phone'),
			phoneDescription: this._t(
				'For table reservations, menu details, delivery, or event information.',
			),
			addressTitle: this._t('Address'),
			addressValue: this._t(
				'Symona Petliury St, 4a, Kamianets-Podilskyi, Khmelnytskyi Oblast',
			),
			addressDescription: this._t(
				'Ukraine, city center. The venue works as a restaurant, cafe, and bar.',
			),
			hoursTitle: this._t('Opening hours'),
			hoursValue: this._t('Daily, 11:00 - 23:00'),
			hoursDescription: this._t('The restaurant is usually open seven days a week.'),
			city: this._t('Kamianets-Podilskyi'),
			formatTitle: this._t('Venue format'),
			formatDescription: this._t(
				'Restaurant, cafe, and bar with European cuisine, desserts, burgers, pasta, meat, and fish dishes.',
			),
			postsTitle: this._t('What they post'),
			postsDescription: this._t(
				'Photos of dishes, atmosphere videos, menu update announcements, seasonal offers, and venue events.',
			),
			reviewsTitle: this._t('Guest reviews'),
			reviewsDescription: this._t(
				'On Tripadvisor, the restaurant has a positive reputation with a rating of about 4.3/5.',
			),
			officialPagesTitle: this._t('Official pages'),
			socialLinks: [
				{
					label: this._t('Instagram'),
					handle: '@blomanjeloungecafe',
					description: this._t(
						'Photos of dishes, reels, menu updates, and the restaurant atmosphere.',
					),
					href: 'https://www.instagram.com/blomanjeloungecafe/',
					ariaLabel: this._t('Open Blomanzhe Lounge Cafe Instagram'),
				},
				{
					label: this._t('Facebook'),
					handle: '/LoungeCafeBlomanje',
					description: this._t('News, events, menu updates, and special cafe offers.'),
					href: 'https://www.facebook.com/LoungeCafeBlomanje/',
					ariaLabel: this._t('Open Blomanzhe Lounge Cafe Facebook'),
				},
				{
					label: this._t('Menu'),
					handle: 'ChoiceQR',
					description: this._t(
						'Online menu with current restaurant categories and items.',
					),
					href: 'https://blomanjeloungecafe.choiceqr.com/online-menu',
					ariaLabel: this._t('Open Blomanzhe online menu'),
				},
				{
					label: this._t('Tripadvisor'),
					handle: 'Lounge Cafe Blomanje',
					description: this._t(
						'Guest reviews page with the restaurant overall rating.',
					),
					href: 'https://www.tripadvisor.com/Restaurant_Review-g659293-d8603673-Reviews-Lounge_Cafe_Blomanje-Kamianets_Podilskyi_Khmelnytskyi_Oblast.html',
					ariaLabel: this._t('Open Blomanzhe Lounge Cafe Tripadvisor'),
				},
			],
		};
	});

	private _t(key: string) {
		return this._translateService.translate(key)();
	}
}
