import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { WebView } from "../services/web-view.service";

@Component({
  selector: "app-add-web-view-modal",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Modal Overlay -->
    <div
      *ngIf="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      (click)="onBackdropClick($event)"
    >
      <!-- Modal Container -->
      <div
        class="bg-white rounded w-full max-w-3xl flex flex-col"
        (click)="$event.stopPropagation()"
      >
        <!-- Header -->
        <div class="flex items-center justify-between px-8 py-6">
          <h2 class="text-[22px] font-medium text-[#3F4254]">Add Web View</h2>
          <button
            (click)="onClose()"
            class="w-5 h-5 flex items-center justify-center hover:opacity-70 transition-opacity"
            aria-label="Close modal"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.933401 18C0.696297 18 0.459192 17.9099 0.279047 17.7284C-0.0825991 17.3667 -0.0825991 16.7804 0.279047 16.4187L16.4266 0.271235C16.7882 -0.0904116 17.3745 -0.0904116 17.7362 0.271235C18.0978 0.632881 18.0978 1.2192 17.7362 1.58107L1.58889 17.7284C1.40738 17.9087 1.17028 18 0.933401 18Z"
                fill="#3F4254"
              />
              <path
                d="M17.082 18C16.8449 18 16.6081 17.9099 16.4277 17.7284L0.279047 1.58107C-0.0825991 1.2192 -0.0825991 0.632881 0.279047 0.271235C0.640694 -0.0904116 1.22701 -0.0904116 1.58889 0.271235L17.7362 16.4187C18.0978 16.7804 18.0978 17.3667 17.7362 17.7284C17.5547 17.9087 17.3178 18 17.082 18Z"
                fill="#3F4254"
              />
            </svg>
          </button>
        </div>

        <!-- Body -->
        <div class="px-8 py-2">
          <!-- Title and Floor Plan For Row -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <!-- Title Field -->
            <div>
              <label class="block text-base font-medium text-[#212529] mb-2"
                >Title</label
              >
              <input
                type="text"
                [(ngModel)]="formData.title"
                placeholder="Enter Title"
                class="w-full h-[50px] px-5 border-2 border-[#E9EBEC] rounded placeholder:text-[#C2C3CB] text-base focus:outline-none focus:border-[#009FD8] transition-colors"
              />
            </div>

            <!-- Floor Plan For Field -->
            <div>
              <label class="block text-base font-medium text-[#212529] mb-2"
                >Floor Plan For</label
              >
              <div class="relative">
                <select
                  [(ngModel)]="formData.floorPlanFor"
                  class="w-full h-[50px] px-5 border-2 border-[#E9EBEC] rounded text-base appearance-none focus:outline-none focus:border-[#009FD8] transition-colors"
                  [class.text-[#C2C3CB]]="!formData.floorPlanFor"
                  [class.text-[#212529]]="formData.floorPlanFor"
                >
                  <option value="" disabled selected hidden>
                    Please Select
                  </option>
                  <option value="Mobile">Mobile</option>
                  <option value="Web">Web</option>
                  <option value="Both">Both</option>
                </select>
                <div
                  class="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none"
                >
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.19527 0.193128C8.45562 -0.0643764 8.87773 -0.0643764 9.13808 0.193128C9.39842 0.450632 9.39842 0.868128 9.13808 1.12563L5.13808 5.08191C4.88569 5.33154 4.4793 5.34028 4.21619 5.10173L0.216187 1.47514C-0.0552254 1.22906 -0.0735598 0.811957 0.175235 0.54351C0.424029 0.275064 0.845741 0.256929 1.11715 0.503005L4.64662 3.70299L8.19527 0.193128Z"
                      fill="#434349"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Radio Buttons - Standard / External -->
          <div class="mb-6">
            <div class="flex items-center gap-8">
              <!-- Standard Radio -->
              <label class="flex items-center gap-3 cursor-pointer">
                <div class="relative">
                  <input
                    type="radio"
                    name="category"
                    value="Standard"
                    [(ngModel)]="formData.type"
                    class="sr-only peer"
                  />
                  <div
                    class="w-5 h-5 rounded-full border border-[#CED4DA] bg-[#FEFEFE] peer-checked:border-[#CED4DA] flex items-center justify-center"
                  >
                    <div
                      class="w-2.5 h-2.5 rounded-full bg-[#049AD0] opacity-0 peer-checked:opacity-100 transition-opacity"
                      [class.opacity-100]="formData.type === 'Standard'"
                    ></div>
                  </div>
                </div>
                <span class="text-base font-medium text-[#212529]"
                  >Standard</span
                >
              </label>

              <!-- External Radio -->
              <label class="flex items-center gap-3 cursor-pointer">
                <div class="relative">
                  <input
                    type="radio"
                    name="category"
                    value="External"
                    [(ngModel)]="formData.type"
                    class="sr-only peer"
                  />
                  <div
                    class="w-5 h-5 rounded-full border border-[#CED4DA] bg-[#FEFEFE] peer-checked:border-[#CED4DA] flex items-center justify-center"
                  >
                    <div
                      class="w-2.5 h-2.5 rounded-full bg-[#049AD0] opacity-0 transition-opacity"
                      [class.opacity-100]="formData.type === 'External'"
                    ></div>
                  </div>
                </div>
                <span class="text-base font-medium text-[#212529]"
                  >External</span
                >
              </label>
            </div>
          </div>

          <!-- Conditional Content Based on Type Selection -->

          <!-- URL Field - Only shown when External is selected -->
          <div *ngIf="formData.type === 'External'" class="mb-6">
            <label class="block text-base font-medium text-[#212529] mb-2"
              >URL</label
            >
            <input
              type="url"
              [(ngModel)]="formData.url"
              placeholder="Enter Location"
              class="w-full h-[50px] px-5 border-2 border-[#E9EBEC] rounded placeholder:text-[#C2C3CB] text-base focus:outline-none focus:border-[#009FD8] transition-colors"
            />
          </div>

          <!-- File Upload Area - Only shown when Standard is selected -->
          <div *ngIf="formData.type === 'Standard'" class="mb-6">
            <div
              class="border border-dashed border-[#B9BBBC] rounded h-[120px] flex flex-col items-center justify-center cursor-pointer hover:border-[#009FD8] transition-colors"
              (click)="fileInput.click()"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="mb-2"
              >
                <path
                  d="M25.0037 27.6421H19.8316H18.4389H18.1381V20.7046H20.407C20.9824 20.7046 21.3224 20.0507 20.9824 19.5799L16.5689 13.4729C16.2877 13.0805 15.7058 13.0805 15.4246 13.4729L11.011 19.5799C10.671 20.0507 11.0045 20.7046 11.5864 20.7046H13.8553V27.6421H13.5546H12.1618H6.16592C2.73314 27.4524 0 24.242 0 20.7634C0 18.3638 1.30119 16.2714 3.23008 15.1402C3.05354 14.6629 2.96199 14.1529 2.96199 13.6167C2.96199 11.1647 4.9432 9.18353 7.39518 9.18353C7.92481 9.18353 8.43482 9.27507 8.91214 9.45162C10.331 6.44385 13.3911 4.35803 16.9481 4.35803C21.5513 4.36457 25.3437 7.88889 25.7752 12.3809C29.3126 12.989 32 16.2649 32 19.9723C32 23.9347 28.9138 27.3674 25.0037 27.6421Z"
                  fill="#878A99"
                />
              </svg>
              <p class="text-base font-medium text-[#212529]">
                Drop files here or click to upload.
              </p>
              <input
                #fileInput
                type="file"
                class="hidden"
                (change)="onFileSelected($event)"
                accept=".pdf,.jpg,.jpeg,.png"
              />
            </div>
            <p
              *ngIf="formData.fileName"
              class="mt-2 text-sm text-[#212529] px-2"
            >
              Selected: {{ formData.fileName }}
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div class="flex items-center justify-end gap-4 px-8 py-5">
          <button
            (click)="onClose()"
            class="flex items-center gap-2 h-9 px-4 rounded bg-[#DEE1EB] text-[#4C546C] font-semibold text-base hover:bg-[#d0d3df] transition-colors"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.617059 12C0.45899 12 0.30092 11.9399 0.180823 11.8189C-0.0602744 11.5778 -0.0602744 11.1869 0.180823 10.9458L10.9458 0.180823C11.1869 -0.0602744 11.5778 -0.0602744 11.8189 0.180823C12.06 0.421921 12.06 0.8128 11.8189 1.05405L1.05405 11.8189C0.933048 11.9392 0.774978 12 0.617059 12Z"
                fill="#4C546C"
              />
              <path
                d="M11.3828 12C11.2248 12 11.0668 11.9399 10.9466 11.8189L0.180823 1.05405C-0.0602744 0.8128 -0.0602744 0.421921 0.180823 0.180823C0.421921 -0.0602744 0.8128 -0.0602744 1.05405 0.180823L11.8189 10.9458C12.06 11.1869 12.06 11.5778 11.8189 11.8189C11.6979 11.9392 11.54 12 11.3828 12Z"
                fill="#4C546C"
              />
            </svg>
            <span>Close</span>
          </button>
          <button
            (click)="onSave()"
            class="flex items-center gap-2 h-9 px-4 rounded bg-[#009FD8] text-white font-semibold text-base hover:bg-[#0385b5] transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.7393 3.76582C14.0192 4.01076 14.0446 4.43749 13.7956 4.71384L6.78635 12.4937C6.53605 12.7715 6.10631 12.7892 5.83406 12.5329L1.77804 8.7145C1.52509 8.47637 1.50088 8.07957 1.7179 7.8083C1.95736 7.50897 2.4033 7.46777 2.6883 7.7241L5.83523 10.5547C6.10871 10.8007 6.52975 10.7787 6.77614 10.5056L12.8051 3.82096C13.0491 3.55046 13.4651 3.52594 13.7393 3.76582Z"
                fill="white"
              />
            </svg>
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class AddWebViewModalComponent {
  @Input() isOpen = false;
  @Input() editMode = false;
  @Input() editingWebView: WebView | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  formData = {
    title: "",
    floorPlanFor: "",
    type: "Standard",
    url: "",
    fileName: "",
  };

  ngOnChanges() {
    if (this.editMode && this.editingWebView) {
      let floorPlanFor = (this.editingWebView as any).floorPlanFor || "";

      // If floorPlanFor is not set but floorPlanTypes exists, derive it from floorPlanTypes
      if (!floorPlanFor && this.editingWebView.floorPlanTypes) {
        if (this.editingWebView.floorPlanTypes.includes("mobile") &&
            this.editingWebView.floorPlanTypes.includes("desktop")) {
          floorPlanFor = "Both";
        } else if (this.editingWebView.floorPlanTypes.includes("mobile")) {
          floorPlanFor = "Mobile";
        } else if (this.editingWebView.floorPlanTypes.includes("desktop")) {
          floorPlanFor = "Web";
        }
      }

      this.formData = {
        title: this.editingWebView.title,
        floorPlanFor: floorPlanFor,
        type: this.editingWebView.type,
        url: (this.editingWebView as any).url || "",
        fileName: (this.editingWebView as any).fileName || "",
      };
    } else {
      this.resetForm();
    }
  }

  onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }

  onClose() {
    this.resetForm();
    this.close.emit();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.formData.fileName = input.files[0].name;
    }
  }

  onSave() {
    // Validate common fields
    if (!this.formData.title.trim()) {
      alert("Please enter a title");
      return;
    }
    if (!this.formData.floorPlanFor) {
      alert("Please select a floor plan");
      return;
    }
    if (!this.formData.type) {
      alert("Please select a type (Standard or External)");
      return;
    }

    // Validate type-specific fields
    if (this.formData.type === "External") {
      if (!this.formData.url.trim()) {
        alert("Please enter a URL for External type");
        return;
      }
    } else if (this.formData.type === "Standard") {
      // For Standard, file is optional but you can add validation if needed
      // if (!this.formData.fileName) {
      //   alert("Please upload a file for Standard type");
      //   return;
      // }
    }

    // Map the selected floor plan to floorPlanTypes array
    let floorPlanTypes: string[] = [];
    if (this.formData.floorPlanFor === "Mobile") {
      floorPlanTypes = ["mobile"];
    } else if (this.formData.floorPlanFor === "Web") {
      floorPlanTypes = ["desktop"];
    } else if (this.formData.floorPlanFor === "Both") {
      floorPlanTypes = ["mobile", "desktop"];
    }

    const webViewData = {
      title: this.formData.title,
      floorPlanFor: this.formData.floorPlanFor,
      type: this.formData.type,
      url: this.formData.type === "External" ? this.formData.url : "",
      fileName: this.formData.type === "Standard" ? this.formData.fileName : "",
      floorPlanTypes: floorPlanTypes,
    };

    this.save.emit(webViewData);
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      title: "",
      floorPlanFor: "",
      type: "Standard",
      url: "",
      fileName: "",
    };
  }
}
