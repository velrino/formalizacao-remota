import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('title') title: string;

  component = {
    accessibility: {
      elements: null,
      className: "accessibility",
      classNameShow: "accessibility-show",
    }
  }

  constructor() { }

  ngOnInit(): void { }

  toggleAccessibility() {
    const { accessibility: { className } } = this.component;
    let elements = document.getElementsByClassName(className);
    for (let i in elements) {
      let element = elements[i];
      this.toggleHasElementClassList(element);
    }
  }

  toggleHasElementClassList(element) {
    if (typeof element.classList != "undefined") {
      this.toggleClass(element);
    }
  }

  toggleClass(element) {
    const { accessibility: { classNameShow } } = this.component;
    const hasClass = element.classList.contains(classNameShow);
    (hasClass) ? element.classList.remove(classNameShow) : element.classList.add(classNameShow);
  }
}
