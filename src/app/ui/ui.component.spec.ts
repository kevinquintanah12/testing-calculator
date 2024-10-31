import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { UiComponent } from "./ui.component";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

describe("Ui Addition - Component", () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should call addition method", () => {
    // Arrange
    let result = 0;
    component.operator1 = 2;
    component.operator2 = 2;

    // Act
    component.addition();
    result = component.result;

    // Assert
    expect(result).toBe(4);
  });

  it("Should set operator1 model through ngModel", async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator1"]')
    ).nativeElement;

    // Act
    inputElement.value = "3.1416";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    // Assert
    expect(component.operator1).toEqual(3.1416);
  });

  it("Should set operator2 model through ngModel", async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator2"]')
    ).nativeElement;

    // Act
    inputElement.value = "2.71";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    // Assert
    expect(component.operator2).toEqual(2.71);
  });

  it("should add operator1 and operator2 when i click the addition button ", () => {
    // Arrange
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let additionButton = fixture.debugElement.query(By.css(".addition-button"));

    // Act
    additionButton.triggerEventHandler("click", null);

    // Assert
    expect(component.result).toBe(7.5);
  });

  it("Should render sum in result div", () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;

    // Act
    component.addition();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".result"));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain("10");
  });
});

describe("Ui Substraction - Component", () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should call substraction method with op1 = 2, op2 = 2 and result in 0", () => {
    // Arrange
    let result = 0;
    component.operator1 = 2;
    component.operator2 = 2;

    // Act
    component.substraction();
    result = component.result;

    // Assert
    expect(result).toBe(0);
  });

  it("Should set operator1 model through ngModel", async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator1"]')
    ).nativeElement;

    // Act
    inputElement.value = "3.1416";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    // Assert
    expect(component.operator1).toEqual(3.1416);
  });

  it("Should set operator2 model through ngModel", async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator2"]')
    ).nativeElement;

    // Act
    inputElement.value = "2.71";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    // Assert
    expect(component.operator2).toEqual(2.71);
  });

  it("Should substract operator1 and operator2 when I click the substraction button with op = 5.0, op2 = 2.5 and result in 2.5", () => {
    // Arrange
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let substractionButton = fixture.debugElement.query(
      By.css(".substraction-button")
    );

    // Act
    substractionButton.triggerEventHandler("click", null);

    // Assert
    expect(component.result).toBe(2.5);
  });

  it("Should render substraction in result div with op1 = 5, op2 = 5 and result in 0", () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;

    // Act
    component.substraction();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".result"));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain("0");
  });
});

describe("Ui Multiplication - Component", () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should call multiplication method with op1 = 2, op2 = 2 and result in 4", () => {
    // Arrange
    let result = 0;
    component.operator1 = 2;
    component.operator2 = 2;

    // Act
    component.multiplication();
    result = component.result;

    // Assert
    expect(result).toBe(4);
  });

  it("Should set operator1 model through ngModel", async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator1"]')
    ).nativeElement;

    // Act
    inputElement.value = "3.1416";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    // Assert
    expect(component.operator1).toEqual(3.1416);
  });

  it("Should set operator2 model through ngModel", async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator2"]')
    ).nativeElement;

    // Act
    inputElement.value = "2.71";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    // Assert
    expect(component.operator2).toEqual(2.71);
  });

  it("Should multiply operator1 and operator2 when I click the multiply button with op1 = 5.0, op2 = 2.5 and result in 12.5", () => {
    // Arrange
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let multiplicationButton = fixture.debugElement.query(
      By.css(".multiplication-button")
    );

    // Act
    multiplicationButton.triggerEventHandler("click", null);

    // Assert
    expect(component.result).toBe(12.5);
  });

  it("Should render multiplication in result div with op1 = 5, op2 = 5 and result in 25", () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;

    // Act
    component.multiplication();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".result"));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain("25");
  });
});

describe("Ui Division - Component", () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(" Should call division method with op1 = 2, op2 = 2 and result in 1", () => {
    // Arrange
    let result = 0;
    component.operator1 = 2;
    component.operator2 = 2;

    // Act
    component.division();
    result = component.result;

    // Assert
    expect(result).toBe(1);
  });

  it("Should set operator1 model through ngModel", async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator1"]')
    ).nativeElement;

    // Act
    inputElement.value = "3.1416";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    // Assert
    expect(component.operator1).toEqual(3.1416);
  });

  it("Should set operator2 model through ngModel", async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator2"]')
    ).nativeElement;

    // Act
    inputElement.value = "2.71";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    // Assert
    expect(component.operator2).toEqual(2.71);
  });

  it("Should divide operator1 and operator2 when I click the divide button with op1 = 5.0, op2 = 2.5 and result in 2", () => {
    // Arrange
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let divisionButton = fixture.debugElement.query(By.css(".division-button"));

    // Act
    divisionButton.triggerEventHandler("click", null);

    // Assert
    expect(component.result).toBe(2);
  });

  it("Should render division in result div with op1 = 5, op2 = 5 and result in 1", () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;

    // Act
    component.division();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".result"));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain("1");
  });
});

describe("Ui Exponent - Component", () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should call exponent method with op1 = 2, op2 = 2 and result in 4", () => {
    // Arrange
    let result = 0;
    component.operator1 = 2;
    component.operator2 = 2;

    // Act
    component.exponent();
    result = component.result;

    // Assert
    expect(result).toBe(4);
  });

  it("Should set operator1 model through ngModel", async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator1"]')
    ).nativeElement;

    // Act
    inputElement.value = "3.1416";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    // Assert
    expect(component.operator1).toEqual(3.1416);
  });

  it("Should set operator2 model through ngModel", async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator2"]')
    ).nativeElement;

    // Act
    inputElement.value = "2.71";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    // Assert
    expect(component.operator2).toEqual(2.71);
  });

  it("Should raise operator1 to the power of operator2 when I click the exponent button with op1 = 5, op2 = 2 and result in 25", () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 2;
    let exponentButton = fixture.debugElement.query(By.css(".exponent-button"));

    // Act
    exponentButton.triggerEventHandler("click", null);

    // Assert
    expect(component.result).toBe(25);
  });

  it("Should render operator1 to the power of operator2 in result div with op1 = 5, op2 = 5 and result in 3125", () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;

    // Act
    component.exponent();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".result"));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain("3125");
  });
});

describe("Ui Square - Component", () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should call square method with op1 = 2 and result in 4", () => {
    // Arrange
    let result = 0;
    component.operator1 = 2;

    // Act
    component.square();
    result = component.result;

    // Assert
    expect(result).toBe(4);
  });

  it("Should set operator1 model through ngModel", async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator1"]')
    ).nativeElement;

    // Act
    inputElement.value = "3.1416";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    // Assert
    expect(component.operator1).toEqual(3.1416);
  });

  it("Should set operator2 model through ngModel", async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator2"]')
    ).nativeElement;

    // Act
    inputElement.value = "2.71";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    // Assert
    expect(component.operator2).toEqual(2.71);
  });

  it("Should square operator1 when I click the square button with op1 = 4 and result in 16", () => {
    // Arrange
    component.operator1 = 4;
    let squareButton = fixture.debugElement.query(By.css(".square-button"));

    // Act
    squareButton.triggerEventHandler("click", null);

    // Assert
    expect(component.result).toBe(16);
  });

  it("Should render square of operator1 in result div with op1 = 5 and result in 25", () => {
    // Arrange
    component.operator1 = 5;

    // Act
    component.square();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".result"));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain("25");
  });
});

describe("Ui Square Root - Component", () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(" Should call square root method with op1 = 4 and result in 2", () => {
    // Arrange
    let result = 0;
    component.operator1 = 4;

    // Act
    component.squareRoot();
    result = component.result;

    // Assert
    expect(result).toBe(2);
  });

  it("Should set operator1 model through ngModel", async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator1"]')
    ).nativeElement;

    // Act
    inputElement.value = "3.1416";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    // Assert
    expect(component.operator1).toEqual(3.1416);
  });

  it("Should set operator2 model through ngModel", async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator2"]')
    ).nativeElement;

    // Act
    inputElement.value = "2.71";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    // Assert
    expect(component.operator2).toEqual(2.71);
  });

  it("Should get square root of operator1 when I click the square root button with op1 = 16 and result in 4", () => {
    // Arrange
    component.operator1 = 16;
    let squareRootButton = fixture.debugElement.query(By.css(".square-root-button"));

    // Act
    squareRootButton.triggerEventHandler("click", null);

    // Assert
    expect(component.result).toBe(4);
  });

  it("Should render square root of operator1 in result div with op1 = 64 and result in 8", () => {
    // Arrange
    component.operator1 = 64;

    // Act
    component.squareRoot();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".result"));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain("8");
  });
});
