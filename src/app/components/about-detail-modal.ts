import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-about-detail-modal",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Modal Backdrop -->
    <div
      *ngIf="isOpen"
      class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4"
      (click)="onCancel()"
    >
      <!-- Modal Container -->
      <div
        class="bg-white rounded shadow-lg w-full max-w-[767px] max-h-[95vh] flex flex-col"
        (click)="$event.stopPropagation()"
      >
        <!-- Modal Header - Fixed -->
        <div class="flex-shrink-0 px-8 py-8 border-b border-[#CED4DA]">
          <div class="flex items-center justify-between">
            <h2 class="text-2xl font-medium text-[#3F4254]">About Detail</h2>
            <button
              type="button"
              (click)="onCancel()"
              class="text-[#3F4254] hover:text-[#212529] transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M0.929495 18C0.692391 18 0.455286 17.9099 0.275141 17.7284C-0.0865054 17.3667 -0.0865054 16.7804 0.275141 16.4187L16.4227 0.271235C16.7843 -0.0904116 17.3706 -0.0904116 17.7323 0.271235C18.0939 0.632881 18.0939 1.2192 17.7323 1.58107L1.58498 17.7284C1.40348 17.9087 1.16637 18 0.929495 18Z"
                    fill="currentColor"
                  />
                  <path
                    d="M17.0781 18C16.841 18 16.6042 17.9099 16.4238 17.7284L0.275141 1.58107C-0.0865054 1.2192 -0.0865054 0.632881 0.275141 0.271235C0.636787 -0.0904116 1.22311 -0.0904116 1.58498 0.271235L17.7323 16.4187C18.0939 16.7804 18.0939 17.3667 17.7323 17.7284C17.5508 17.9087 17.3139 18 17.0781 18Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>

        <!-- Modal Body and Form -->
        <form class="flex-1 flex flex-col min-h-0" (ngSubmit)="onSubmit()">
          <!-- Scrollable Content -->
          <div class="flex-1 overflow-y-auto px-8 py-8 min-h-0 space-y-8">
            <!-- Title Field -->
            <div>
              <label class="block text-sm font-medium text-[#212529] mb-3">
                Title<span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                [(ngModel)]="formData.title"
                name="title"
                placeholder="Enter Title"
                class="w-full px-4 py-3 border-2 border-[#E9EBEC] rounded text-[#686868] placeholder-[#C2C3CB] focus:outline-none focus:border-[#049AD0] transition-colors"
              />
            </div>

            <!-- Description Field -->
            <div>
              <label class="block text-sm font-medium text-[#212529] mb-3">
                Description
              </label>
              <div class="border border-[#CED4DA] rounded overflow-hidden">
                <!-- Rich Text Toolbar -->
                <div
                  class="bg-white border-b border-[#CED4DA] p-2 flex flex-wrap gap-1 items-center overflow-x-auto"
                >
                  <!-- Undo/Redo -->
                  <button
                    type="button"
                    class="p-2 hover:bg-[#F0F0F0] rounded text-[#212529] transition-colors"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5 6.25H4.88438L7.12625 4.00875L6.25 3.125L2.5 6.875L6.25 10.625L7.12625 9.74062L4.88625 7.5H12.5C13.4946 7.5 14.4484 7.89509 15.1517 8.59835C15.8549 9.30161 16.25 10.2554 16.25 11.25C16.25 12.2446 15.8549 13.1984 15.1517 13.9017C14.4484 14.6049 13.4946 15 12.5 15H7.5V16.25H12.5C13.8261 16.25 15.0979 15.7232 16.0355 14.7855C16.9732 13.8479 17.5 12.5761 17.5 11.25C17.5 9.92392 16.9732 8.65215 16.0355 7.71447C15.0979 6.77678 13.8261 6.25 12.5 6.25Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="p-2 hover:bg-[#F0F0F0] rounded text-[#212529] transition-colors"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 6.25H15.1156L12.8737 4.00875L13.75 3.125L17.5 6.875L13.75 10.625L12.8737 9.74062L15.1137 7.5H7.5C6.50544 7.5 5.55161 7.89509 4.84835 8.59835C4.14509 9.30161 3.75 10.2554 3.75 11.25C3.75 12.2446 4.14509 13.1984 4.84835 13.9017C5.55161 14.6049 6.50544 15 7.5 15H12.5V16.25H7.5C6.17392 16.25 4.90215 15.7232 3.96447 14.7855C3.02678 13.8479 2.5 12.5761 2.5 11.25C2.5 9.92392 3.02678 8.65215 3.96447 7.71447C4.90215 6.77678 6.17392 6.25 7.5 6.25Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>

                  <div class="w-px h-6 bg-[#E9ECEF] mx-1"></div>

                  <!-- Text Style Dropdown -->
                  <button
                    type="button"
                    class="px-3 py-2 hover:bg-[#F0F0F0] rounded text-[#212529] text-sm font-medium flex items-center gap-1 transition-colors"
                  >
                    <span>Normal text</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 11L3 6.00005L3.7 5.30005L8 9.60005L12.3 5.30005L13 6.00005L8 11Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>

                  <!-- Format Buttons -->
                  <button
                    type="button"
                    class="p-2 hover:bg-[#F0F0F0] rounded text-[#212529] transition-colors"
                    title="Bold"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.4062 15.625H5.625V4.375H10.9375C11.5639 4.37504 12.1771 4.55435 12.7048 4.89174C13.2325 5.22914 13.6526 5.71052 13.9155 6.27903C14.1784 6.84754 14.2731 7.47942 14.1884 8.10001C14.1037 8.72061 13.8431 9.30399 13.4375 9.78125C13.9673 10.205 14.3528 10.7825 14.5408 11.4344C14.7289 12.0862 14.7102 12.7803 14.4875 13.4211C14.2647 14.0619 13.8488 14.6179 13.297 15.0126C12.7452 15.4073 12.0847 15.6213 11.4062 15.625ZM7.5 13.75H11.3937C11.5784 13.75 11.7613 13.7136 11.9319 13.643C12.1025 13.5723 12.2575 13.4687 12.3881 13.3381C12.5187 13.2075 12.6223 13.0525 12.693 12.8819C12.7636 12.7113 12.8 12.5284 12.8 12.3438C12.8 12.1591 12.7636 11.9762 12.693 11.8056C12.6223 11.635 12.5187 11.48 12.3881 11.3494C12.2575 11.2188 12.1025 11.1152 11.9319 11.0445C11.7613 10.9739 11.5784 10.9375 11.3937 10.9375H7.5V13.75ZM7.5 9.0625H10.9375C11.1222 9.0625 11.305 9.02613 11.4756 8.95546C11.6463 8.88478 11.8013 8.7812 11.9319 8.65062C12.0625 8.52004 12.166 8.36501 12.2367 8.1944C12.3074 8.02378 12.3438 7.84092 12.3438 7.65625C12.3438 7.47158 12.3074 7.28872 12.2367 7.1181C12.166 6.94749 12.0625 6.79246 11.9319 6.66188C11.8013 6.5313 11.6463 6.42772 11.4756 6.35704C11.305 6.28637 11.1222 6.25 10.9375 6.25H7.5V9.0625Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="p-2 hover:bg-[#F0F0F0] rounded text-[#212529] transition-colors"
                    title="Italic"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.625 5.625V4.375H7.5V5.625H10.7125L7.98125 14.375H4.375V15.625H12.5V14.375H9.2875L12.0187 5.625H15.625Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="p-2 hover:bg-[#F0F0F0] rounded text-[#212529] transition-colors"
                    title="Underline"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 16.25H17.5V17.5H2.5V16.25ZM10 14.375C8.83968 14.375 7.72688 13.9141 6.90641 13.0936C6.08594 12.2731 5.625 11.1603 5.625 10V3.125H6.875V10C6.875 10.8288 7.20424 11.6237 7.79029 12.2097C8.37634 12.7958 9.1712 13.125 10 13.125C10.8288 13.125 11.6237 12.7958 12.2097 12.2097C12.7958 11.6237 13.125 10.8288 13.125 10V3.125H14.375V10C14.375 11.1603 13.9141 12.2731 13.0936 13.0936C12.2731 13.9141 11.1603 14.375 10 14.375Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="p-2 hover:bg-[#F0F0F0] rounded text-[#212529] transition-colors"
                    title="Strikethrough"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5 9.37502H11.2225C10.945 9.30039 10.6662 9.23059 10.3863 9.16564C8.63125 8.75064 7.63875 8.44689 7.63875 7.02627C7.6245 6.78103 7.66081 6.53548 7.74542 6.30486C7.83004 6.07424 7.96115 5.86347 8.13062 5.68564C8.6615 5.24908 9.32644 5.00852 10.0137 5.00439C11.7825 4.96064 12.5981 5.56064 13.265 6.47314L14.2744 5.73564C13.8019 5.05711 13.1578 4.51617 12.4078 4.16808C11.6578 3.81999 10.8288 3.67723 10.0056 3.75439C8.99439 3.76085 8.01887 4.12911 7.25563 4.79252C6.96634 5.08595 6.74024 5.43554 6.59125 5.81971C6.44227 6.20389 6.37356 6.61451 6.38937 7.02627C6.36197 7.47682 6.4466 7.92714 6.63572 8.337C6.82483 8.74686 7.11254 9.10349 7.47312 9.37502H2.5V10.625H11.0325C12.2619 10.9813 12.9969 11.445 13.0156 12.7238C13.0359 12.9969 12.9985 13.2713 12.9056 13.529C12.8128 13.7867 12.6667 14.0219 12.4769 14.2194C11.8155 14.7407 10.9938 15.0166 10.1519 15C9.52345 14.9818 8.90738 14.8209 8.35029 14.5296C7.7932 14.2382 7.30966 13.8239 6.93625 13.3181L5.97812 14.1206C6.46358 14.7676 7.08994 15.2955 7.80972 15.6645C8.52951 16.0334 9.32384 16.2336 10.1325 16.25H10.195C11.3492 16.2633 12.4695 15.8596 13.35 15.1131C13.6625 14.7981 13.9054 14.421 14.0632 14.0062C14.2209 13.5914 14.2898 13.1481 14.2656 12.705C14.289 11.947 14.0332 11.2069 13.5469 10.625H17.5V9.37502Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>

                <!-- Description Textarea -->
                <textarea
                  [(ngModel)]="formData.description"
                  name="description"
                  placeholder="Enter description..."
                  rows="8"
                  class="w-full px-4 py-4 text-[#686868] placeholder-[#C2C3CB] focus:outline-none resize-none text-sm leading-6"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Modal Footer - Fixed -->
          <div
            class="flex-shrink-0 px-8 py-6 border-t border-[#CED4DA] flex justify-end gap-3"
          >
            <button
              type="button"
              (click)="onCancel()"
              class="px-6 py-2 bg-[#DEE1EB] hover:bg-[#CED1DB] rounded text-[#4C546C] font-semibold transition-colors flex items-center gap-2"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip2)">
                  <path
                    d="M0.620965 12C0.462896 12 0.304826 11.9399 0.184729 11.8189C-0.0563682 11.5778 -0.0563682 11.1869 0.184729 10.9458L10.9497 0.180823C11.1908 -0.0602744 11.5817 -0.0602744 11.8228 0.180823C12.0639 0.421921 12.0639 0.8128 11.8228 1.05405L1.05795 11.8189C0.936954 11.9392 0.778884 12 0.620965 12Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.3867 12C11.2287 12 11.0707 11.9399 10.9505 11.8189L0.184729 1.05405C-0.0563682 0.8128 -0.0563682 0.421921 0.184729 0.180823C0.425827 -0.0602744 0.816707 -0.0602744 1.05795 0.180823L11.8228 10.9458C12.0639 11.1869 12.0639 11.5778 11.8228 11.8189C11.7018 11.9392 11.5439 12 11.3867 12Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip2">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Close
            </button>
            <button
              type="submit"
              class="px-6 py-2 bg-[#009FD8] hover:bg-[#0385b5] text-white rounded font-semibold transition-colors flex items-center gap-2"
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
                  d="M13.7432 3.76582C14.0231 4.01076 14.0485 4.43749 13.7995 4.71384L6.79025 12.4937C6.53996 12.7715 6.11021 12.7892 5.83796 12.5329L1.78194 8.7145C1.529 8.47637 1.50478 8.07957 1.7218 7.8083C1.96127 7.50897 2.40721 7.46777 2.6922 7.7241L5.83913 10.5547C6.11261 10.8007 6.53366 10.7787 6.78005 10.5056L12.8091 3.82096C13.053 3.55046 13.4691 3.52594 13.7432 3.76582Z"
                  fill="white"
                />
              </svg>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [],
})
export class AboutDetailModalComponent implements OnInit, OnChanges {
  @Input() isOpen = false;
  @Input() initialTitle: string = "";
  @Input() initialDescription: string = "";
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  formData = {
    title: "",
    description: "",
  };

  ngOnInit() {
    this.loadInitialData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.isOpen) {
      this.loadInitialData();
    }
  }

  private loadInitialData() {
    this.formData = {
      title: this.initialTitle || "",
      description: this.initialDescription || "",
    };
  }

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    if (this.formData.title.trim()) {
      this.save.emit(this.formData);
      this.close.emit();
    }
  }
}
