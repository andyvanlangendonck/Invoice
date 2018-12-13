import {
  async,
  TestBed,
  ComponentFixture,
  inject
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HoverClassDirective } from './hover-class.directive';
import { ElementRef, Component, Renderer2, DebugElement } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  template: `
    <div appHighlight [highlightColor]="color"></div>
  `
})
class DummyComponent {
  color = 'green';
}
/*
https://codecraft.tv/courses/angular/unit-testing/directives/
*/
describe('hover-class directive', () => {
  let fixture: ComponentFixture<DummyComponent>;
  let component: DummyComponent;
  let directive: HoverClassDirective;
  let div: DebugElement;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [DummyComponent, HoverClassDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
    div = fixture.debugElement.query(By.directive(HoverClassDirective));
    directive = div.injector.get(HoverClassDirective);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(div).toBeTruthy();
    expect(directive).toBeTruthy();
  });

  it('should highlight on mouseover', () => {
    component.color = 'yellow';
    fixture.detectChanges();
    expect(directive.highlightColor).toBe(component.color);
    div.triggerEventHandler('mouseover', {});
    fixture.detectChanges();
    expect(div.nativeElement.style.backgroundColor).toBe(component.color);
  });
});
