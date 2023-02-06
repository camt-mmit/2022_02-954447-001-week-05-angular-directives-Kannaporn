import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export type InputType = {value: number};
export type SectionType = InputType[];

@Component({
  selector: 'app-dynamic-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss']
})
export class DynamicInputComponent {
  sections:SectionType[] = [this.createSection()];

private createInput(): InputType {
  return {value: 0};
}

private createSection(): SectionType {
  return [this.createInput()];
}
  
addsection() :void {
    this.sections.push(this.createSection());
    }

removesection(index: number) : void {
  this.sections.splice(index, 1);
}

addinput(section : SectionType) : void {
  section.push(this.createInput());
}

removeinput(section : SectionType, index: number) : void {
  section.splice(index, 1);
}
getresult(section: SectionType): number {
  return section
  .map((input)=>input.value)
  .reduce((carry, value) => carry + value, 0);
  }
}