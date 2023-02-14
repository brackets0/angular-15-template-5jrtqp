import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public step: number = 0;
  public formOne: FormGroup;
  public formTwo: FormGroup;

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.formOne = this.fb.group({
      userName: this.fb.control(null),
      password: this.fb.control(null),
      tester: this.fb.control(false)
    });
    this.formTwo = this.fb.group({
      testing: this.fb.control(null),
      testingtwo: this.fb.control(null)
    });
  }

  public submitFormOne(): void {
    this.step = 1;
  }

  public submitFormTwo(): void {
    this.step = 2;
  }

  public moveToStep(step: number): void {
    this.step = step;
  }
}
