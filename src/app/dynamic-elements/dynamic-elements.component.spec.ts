import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DynamicElementsComponent } from "./dynamic-elements.component";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "../app.component";

describe("DynamicElementsComponent", () => {
  let component: DynamicElementsComponent;
  let fixture: ComponentFixture<DynamicElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicElementsComponent, AppComponent],
      imports: [FormsModule],
      providers: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicElementsComponent);
    component = fixture.componentInstance;
    component.childObject = {
      type: "paragraph",
      depth: 1,
      text:
        "Do you have questions or comments and do you wish to contact me? Please visit our customer support page.",
      inlineStyleRanges: [],
      inlineEntityRanges: [
        {
          type: "LINK",
          offset: 83,
          length: 16,
          data: {
            target: "_self",
            url: "https://goole.com",
          },
        },
      ],
    };
    fixture.detectChanges();
  });
  it("should create the app", () => {
    expect(component).toBeTruthy();
  });
  it("Should contain Paragraph tag", () => {
    expect(document.getElementsByTagName("p")).toBeTruthy();
  });
});
