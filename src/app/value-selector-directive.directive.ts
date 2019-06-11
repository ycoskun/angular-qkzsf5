import { Directive, ElementRef, HostListener } from '@angular/core';
import { Overlay, OverlayRef, ConnectedPositionStrategy } from '@angular/cdk/overlay';
import { FormControl } from "@angular/forms";
import { ComponentPortal } from '@angular/cdk/portal';
import { HelloComponent } from './hello.component';
import { NgControl } from "@angular/forms";

@Directive({
  selector: '[appValueSelectorDirective]'
})
export class ValueSelectorDirectiveDirective {
  private overlayRef: OverlayRef;
  constructor(private el: ElementRef, private overlay: Overlay, private ctrl: NgControl) { }

  @HostListener('focus') inputFocused() {
    this.overlayRef = this.overlay.create({
      height: '200px',
      width: '400px',
      positionStrategy: this.overlay.position().flexibleConnectedTo(this.el).withPositions([{ originX: "center", originY: "bottom", overlayX: "center", overlayY: "top" }]).withDefaultOffsetY(16).withDefaultOffsetX(0),
      hasBackdrop: false,
      panelClass: "myOverlayPanel"
    });
    const helloPortal = new ComponentPortal(HelloComponent);
    const compRef = this.overlayRef.attach(helloPortal);

    compRef.instance.data = { "current_value": this.ctrl.control.value };
    compRef.instance.helloComplete.subscribe(result => {
      this.ctrl.control.setValue(result);
    }, err => 0, () => this.close());
  }

  private close() {
    this.overlayRef.dispose();
  }
}
