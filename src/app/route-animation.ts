import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
} from '@angular/animations';
export const slideInAnimation =
trigger('routeAnimations', [
        transition('Home => *', [
            query(':enter, :leave', 
                style({ position: 'fixed', width: '100%' }), 
                { optional: true }),        
            group([
                query(':enter',[
                    style({ transform: 'translateX(100%)' }),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform:   'translateX(0%)'}),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Basic => Home', [
            query(':enter, :leave', 
                style({ position: 'fixed', width: '100%' }), 
                { optional: true }),        
            group([
                query(':enter',[
                    style({ transform: 'translateX(-100%)' }),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform:   'translateX(0%)'}),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Basic => *', [
            query(':enter, :leave', 
                style({ position: 'fixed', width: '100%' }), 
                { optional: true }),        
            group([
                query(':enter',[
                    style({ transform: 'translateX(100%)' }),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform:   'translateX(0%)'}),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Button => Home', [
            query(':enter, :leave', 
                style({ position: 'fixed', width: '100%' }), 
                { optional: true }),        
            group([
                query(':enter',[
                    style({ transform: 'translateX(-100%)' }),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform:   'translateX(0%)'}),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Button => Basic', [
            query(':enter, :leave', 
                style({ position: 'fixed', width: '100%' }), 
                { optional: true }),        
            group([
                query(':enter',[
                    style({ transform: 'translateX(-100%)' }),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform:   'translateX(0%)'}),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Button => *', [
            query(':enter, :leave', 
                style({ position: 'fixed', width: '100%' }), 
                { optional: true }),        
            group([
                query(':enter',[
                    style({ transform: 'translateX(100%)' }),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform:   'translateX(0%)'}),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Image => Animation', [
            query(':enter, :leave', 
                style({ position: 'fixed', width: '100%' }), 
                { optional: true }),        
            group([
                query(':enter',[
                    style({ transform: 'translateX(100%)' }),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform:   'translateX(0%)'}),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Image => *', [
            query(':enter, :leave', 
                style({ position: 'fixed', width: '100%' }), 
                { optional: true }),        
            group([
                query(':enter',[
                    style({ transform: 'translateX(-100%)' }),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform:   'translateX(0%)'}),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Animation => *', [
            query(':enter, :leave', 
                style({ position: 'fixed', width: '100%' }), 
                { optional: true }),        
            group([
                query(':enter',[
                    style({ transform: 'translateX(-100%)' }),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform:   'translateX(0%)'}),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(100%)' }))
                ], { optional: true }),
            ])
        ]),
]);
