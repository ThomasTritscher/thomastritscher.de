import { trigger, transition, style, query, group, animate } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ opacity: '1' }),
    query(':enter, :leave', [
      style({
        position: 'fixed',
        height: '100vh',
        width: '100vw',
        top: 0,
        left: 0,
        zIndex: 10000,
        background: '#FF5722',
      })
    ], { optional: true }),
    query(':enter', [
      animate('0.5s', style({ opacity: '0' }))
    ], { optional: true }),
  ])
]);