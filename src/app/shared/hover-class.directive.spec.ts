import {
  async,
  TestBed,
  ComponentFixture,
  inject
} from '@angular/core/testing';
import { HoverClassDirective } from './hover-class.directive';
import { ElementRef, Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  template: `
    <div [appHighlight]="color"></div>
  `
})
class DummyComponent {
  color = 'green';
}

xdescribe('hover-class directive', () => {
  let fixture: ComponentFixture<DummyComponent>;
  let component: DummyComponent;

  beforeEach(async(() => {
    spyOn(console, 'log');

    TestBed.configureTestingModule({
      declarations: [DummyComponent, HoverClassDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(console.log).toHaveBeenCalledWith('test');
  });

  it('should highlight on mouseover', () => {
    component.color = 'green';
    fixture.detectChanges();
    // force hover
    fixture.nativeElement.dispatchEvent(
      new MouseEvent('mouseover', {
        view: window,
        bubbles: true,
        cancelable: true
      })
    );

    expect(fixture.nativeElement.style.backgroundColor).toBe(component.color);
  });
});
