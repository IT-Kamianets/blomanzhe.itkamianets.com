import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TranslateDirective } from '@wawjs/ngx-translate';

interface GalleryPhoto {
	src: string;
	alt: string;
}

@Component({
	imports: [TranslateDirective],
	templateUrl: './gallery.component.html',
	styleUrl: './gallery.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {
	protected readonly photos: GalleryPhoto[] = [
		{ src: 'gallery/blomanzhe-01.jpg', alt: 'Blomanzhe gallery photo 1' },
		{ src: 'gallery/blomanzhe-02.jpg', alt: 'Blomanzhe gallery photo 2' },
		{ src: 'gallery/blomanzhe-03.jpg', alt: 'Blomanzhe gallery photo 3' },
		{ src: 'gallery/blomanzhe-04.jpg', alt: 'Blomanzhe gallery photo 4' },
		{ src: 'gallery/blomanzhe-05.jpg', alt: 'Blomanzhe gallery photo 5' },
		{ src: 'gallery/blomanzhe-06.jpg', alt: 'Blomanzhe gallery photo 6' },
		{ src: 'gallery/blomanzhe-07.jpg', alt: 'Blomanzhe gallery photo 7' },
		{ src: 'gallery/blomanzhe-08.jpg', alt: 'Blomanzhe gallery photo 8' },
		{ src: 'gallery/blomanzhe-09.jpg', alt: 'Blomanzhe gallery photo 9' },
		{ src: 'gallery/blomanzhe-10.jpg', alt: 'Blomanzhe gallery photo 10' },
		{ src: 'gallery/blomanzhe-11.jpg', alt: 'Blomanzhe gallery photo 11' },
		{ src: 'gallery/blomanzhe-12.jpg', alt: 'Blomanzhe gallery photo 12' },
		{ src: 'gallery/blomanzhe-13.jpg', alt: 'Blomanzhe gallery photo 13' },
		{ src: 'gallery/blomanzhe-14.jpg', alt: 'Blomanzhe gallery photo 14' },
		{ src: 'gallery/blomanzhe-15.jpg', alt: 'Blomanzhe gallery photo 15' },
		{ src: 'gallery/blomanzhe-16.jpg', alt: 'Blomanzhe gallery photo 16' },
		{ src: 'gallery/blomanzhe-17.jpg', alt: 'Blomanzhe gallery photo 17' },
		{ src: 'gallery/blomanzhe-18.jpg', alt: 'Blomanzhe gallery photo 18' },
		{ src: 'gallery/blomanzhe-19.jpg', alt: 'Blomanzhe gallery photo 19' },
		{ src: 'gallery/blomanzhe-20.jpg', alt: 'Blomanzhe gallery photo 20' },
	];

	protected readonly selectedPhoto = signal<GalleryPhoto | null>(null);

	protected openPhoto(photo: GalleryPhoto) {
		this.selectedPhoto.set(photo);
	}

	protected closePhoto() {
		this.selectedPhoto.set(null);
	}
}
