import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DynamicElementsComponent } from './dynamic-elements/dynamic-elements.component';
import { DataService } from './data.services';
import { HttpClientModule } from '@angular/common/http';
import { MockDataService } from 'src/assets/mock/mock-data.service';
  

describe('AppComponent', () => {
  let dataService: MockDataService ;
  let component: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DynamicElementsComponent
      ],
      imports:[
        HttpClientModule
      ],
      providers: [DataService]
    }).compileComponents();
    dataService = new MockDataService();
    component = TestBed.createComponent(AppComponent).componentInstance;
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Html Renderer');
  });

  it('Data Service should return data', () => {
    expect(dataService.getData()).toBeTruthy()
  });
  it('Data Service should return data', () => {
    expect(dataService.getData()).toBeTruthy()
  });
  it('OnInit all RJF should be filered from data', () => {
    component.ngOnInit();
    expect(component.rjfArray.length).toBe(0);
  });
  it('Should contain app-dynamic element', () => {
    expect(document.getElementsByTagName("app-dynamic-elements")).toBeTruthy();
  });


});
