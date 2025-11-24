import { Component, Output, EventEmitter, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-add-schedule-modal",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Modal Overlay -->
    <div
      *ngIf="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      (click)="onOverlayClick($event)"
    >
      <!-- Modal Container -->
      <div
        class="bg-white rounded w-full max-w-3xl max-h-[90vh] flex flex-col"
        (click)="$event.stopPropagation()"
      >
        <!-- Fixed Header -->
        <div
          class="flex items-center justify-between px-8 py-6 border-b border-gray-200 flex-shrink-0"
        >
          <h2 class="text-[22px] font-medium text-[#3F4254]">Add Schedule</h2>
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
                d="M0.929495 18C0.692391 18 0.455286 17.9099 0.275141 17.7284C-0.0865054 17.3667 -0.0865054 16.7804 0.275141 16.4187L16.4227 0.271235C16.7843 -0.0904116 17.3706 -0.0904116 17.7323 0.271235C18.0939 0.632881 18.0939 1.2192 17.7323 1.58107L1.58498 17.7284C1.40348 17.9087 1.16637 18 0.929495 18Z"
                fill="#3F4254"
              />
              <path
                d="M17.0781 18C16.841 18 16.6042 17.9099 16.4238 17.7284L0.275141 1.58107C-0.0865054 1.2192 -0.0865054 0.632881 0.275141 0.271235C0.636787 -0.0904116 1.22311 -0.0904116 1.58498 0.271235L17.7323 16.4187C18.0939 16.7804 18.0939 17.3667 17.7323 17.7284C17.5508 17.9087 17.3139 18 17.0781 18Z"
                fill="#3F4254"
              />
            </svg>
          </button>
        </div>

        <!-- Scrollable Body -->
        <div class="flex-1 overflow-y-auto px-8 py-6">
          <div class="space-y-6">
            <!-- Title and Date Row -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              <!-- Date Field -->
              <div>
                <label class="block text-base font-medium text-[#212529] mb-2"
                  >Date</label
                >
                <div class="relative">
                  <input
                    type="date"
                    [(ngModel)]="formData.date"
                    placeholder="Select Date"
                    class="w-full h-[50px] px-5 pr-[58px] border-2 border-[#E9EBEC] rounded placeholder:text-[#C2C3CB] text-base focus:outline-none focus:border-[#009FD8] transition-colors"
                  />
                  <div
                    class="absolute right-0 top-0 h-[50px] w-[50px] bg-[#E9EBEC] rounded-r flex items-center justify-center pointer-events-none"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_calendar)">
                        <path
                          d="M19.4219 1.71875H18.3906V0H16.6719V1.71875H5.32812V0H3.60938V1.71875H2.57812C1.15655 1.71875 0 2.8753 0 4.29688V19.4219C0 20.8435 1.15655 22 2.57812 22H19.4219C20.8435 22 22 20.8435 22 19.4219V4.29688C22 2.8753 20.8435 1.71875 19.4219 1.71875ZM20.2812 19.4219C20.2812 19.8957 19.8957 20.2812 19.4219 20.2812H2.57812C2.10427 20.2812 1.71875 19.8957 1.71875 19.4219V8.07812H20.2812V19.4219ZM20.2812 6.35938H1.71875V4.29688C1.71875 3.82302 2.10427 3.4375 2.57812 3.4375H3.60938V5.15625H5.32812V3.4375H16.6719V5.15625H18.3906V3.4375H19.4219C19.8957 3.4375 20.2812 3.82302 20.2812 4.29688V6.35938Z"
                          fill="#434349"
                        />
                        <path
                          d="M4.98438 9.88281H3.26562V11.6016H4.98438V9.88281Z"
                          fill="#434349"
                        />
                        <path
                          d="M8.42188 9.88281H6.70312V11.6016H8.42188V9.88281Z"
                          fill="#434349"
                        />
                        <path
                          d="M11.8594 9.88281H10.1406V11.6016H11.8594V9.88281Z"
                          fill="#434349"
                        />
                        <path
                          d="M15.2969 9.88281H13.5781V11.6016H15.2969V9.88281Z"
                          fill="#434349"
                        />
                        <path
                          d="M18.7344 9.88281H17.0156V11.6016H18.7344V9.88281Z"
                          fill="#434349"
                        />
                        <path
                          d="M4.98438 13.3203H3.26562V15.0391H4.98438V13.3203Z"
                          fill="#434349"
                        />
                        <path
                          d="M8.42188 13.3203H6.70312V15.0391H8.42188V13.3203Z"
                          fill="#434349"
                        />
                        <path
                          d="M11.8594 13.3203H10.1406V15.0391H11.8594V13.3203Z"
                          fill="#434349"
                        />
                        <path
                          d="M15.2969 13.3203H13.5781V15.0391H15.2969V13.3203Z"
                          fill="#434349"
                        />
                        <path
                          d="M4.98438 16.7578H3.26562V18.4766H4.98438V16.7578Z"
                          fill="#434349"
                        />
                        <path
                          d="M8.42188 16.7578H6.70312V18.4766H8.42188V16.7578Z"
                          fill="#434349"
                        />
                        <path
                          d="M11.8594 16.7578H10.1406V18.4766H11.8594V16.7578Z"
                          fill="#434349"
                        />
                        <path
                          d="M15.2969 16.7578H13.5781V18.4766H15.2969V16.7578Z"
                          fill="#434349"
                        />
                        <path
                          d="M18.7344 13.3203H17.0156V15.0391H18.7344V13.3203Z"
                          fill="#434349"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_calendar">
                          <rect width="22" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- Start Time and End Time Row -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Start Time Field -->
              <div>
                <label class="block text-base font-medium text-[#212529] mb-2"
                  >Start Time</label
                >
                <div class="relative">
                  <input
                    type="time"
                    [(ngModel)]="formData.startTime"
                    placeholder="Select Time"
                    class="w-full h-[50px] px-5 pr-[58px] border-2 border-[#E9EBEC] rounded placeholder:text-[#C2C3CB] text-base focus:outline-none focus:border-[#009FD8] transition-colors"
                  />
                  <div
                    class="absolute right-0 top-0 h-[50px] w-[50px] bg-[#E9EBEC] rounded-r flex items-center justify-center pointer-events-none"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_clock)">
                        <path
                          d="M11 0C4.94317 0 0 4.94351 0 11C0 17.0568 4.94351 22 11 22C17.0568 22 22 17.0564 22 11C22 4.94317 17.0565 0 11 0ZM11 20.7109C5.64536 20.7109 1.28906 16.3546 1.28906 11C1.28906 5.64536 5.64536 1.28906 11 1.28906C16.3546 1.28906 20.7109 5.64536 20.7109 11C20.7109 16.3546 16.3546 20.7109 11 20.7109Z"
                          fill="#434349"
                        />
                        <path
                          d="M11.6445 10.733V7.13281C11.6445 6.77686 11.356 6.48828 11 6.48828C10.644 6.48828 10.3555 6.77686 10.3555 7.13281V11C10.3555 11.1709 10.4234 11.3349 10.5443 11.4558L14.4115 15.323C14.6631 15.5746 15.0712 15.5747 15.323 15.323C15.5747 15.0712 15.5747 14.6632 15.323 14.4115L11.6445 10.733Z"
                          fill="#434349"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_clock">
                          <rect width="22" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              <!-- End Time Field -->
              <div>
                <label class="block text-base font-medium text-[#212529] mb-2"
                  >End Time</label
                >
                <div class="relative">
                  <input
                    type="time"
                    [(ngModel)]="formData.endTime"
                    placeholder="Select Time"
                    class="w-full h-[50px] px-5 pr-[58px] border-2 border-[#E9EBEC] rounded placeholder:text-[#C2C3CB] text-base focus:outline-none focus:border-[#009FD8] transition-colors"
                  />
                  <div
                    class="absolute right-0 top-0 h-[50px] w-[50px] bg-[#E9EBEC] rounded-r flex items-center justify-center pointer-events-none"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_clock2)">
                        <path
                          d="M11 0C4.94317 0 0 4.94351 0 11C0 17.0568 4.94351 22 11 22C17.0568 22 22 17.0564 22 11C22 4.94317 17.0565 0 11 0ZM11 20.7109C5.64536 20.7109 1.28906 16.3546 1.28906 11C1.28906 5.64536 5.64536 1.28906 11 1.28906C16.3546 1.28906 20.7109 5.64536 20.7109 11C20.7109 16.3546 16.3546 20.7109 11 20.7109Z"
                          fill="#434349"
                        />
                        <path
                          d="M11.6445 10.733V7.13281C11.6445 6.77686 11.356 6.48828 11 6.48828C10.644 6.48828 10.3555 6.77686 10.3555 7.13281V11C10.3555 11.1709 10.4234 11.3349 10.5443 11.4558L14.4115 15.323C14.6631 15.5746 15.0712 15.5747 15.323 15.323C15.5747 15.0712 15.5747 14.6632 15.323 14.4115L11.6445 10.733Z"
                          fill="#434349"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_clock2">
                          <rect width="22" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- Speakers and Schedule For Row -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Speakers Field -->
              <div>
                <label class="block text-base font-medium text-[#212529] mb-2"
                  >Speakers</label
                >
                <div class="relative">
                  <select
                    [(ngModel)]="formData.speakers"
                    class="w-full h-[50px] px-4 pr-10 border-2 border-[#E9EBEC] rounded text-base appearance-none focus:outline-none focus:border-[#009FD8] transition-colors"
                    [class.text-[#C2C3CB]]="!formData.speakers"
                    [class.text-[#212529]]="formData.speakers"
                  >
                    <option value="" disabled selected hidden>
                      Please Select Speakers
                    </option>
                    <option value="speaker1">Speaker 1</option>
                    <option value="speaker2">Speaker 2</option>
                    <option value="speaker3">Speaker 3</option>
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
                        d="M8.31068 0.193108C8.57471 -0.0643956 9.00279 -0.0643956 9.26682 0.193108C9.53085 0.450612 9.53085 0.868109 9.26682 1.12561L5.21024 5.0819C4.95429 5.33152 4.54215 5.34026 4.27532 5.10171L0.218738 1.47512C-0.0565142 1.22904 -0.075108 0.811938 0.177206 0.543491C0.42952 0.275045 0.857196 0.25691 1.13245 0.502986L4.71184 3.70297L8.31068 0.193108Z"
                        fill="#434349"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Schedule For Field -->
              <div>
                <label class="block text-base font-medium text-[#212529] mb-2"
                  >Schedule For</label
                >
                <div class="relative">
                  <select
                    [(ngModel)]="formData.scheduleFor"
                    class="w-full h-[50px] px-4 pr-10 border-2 border-[#E9EBEC] rounded text-base appearance-none focus:outline-none focus:border-[#009FD8] transition-colors"
                    [class.text-[#C2C3CB]]="!formData.scheduleFor"
                    [class.text-[#212529]]="formData.scheduleFor"
                  >
                    <option value="" disabled selected hidden>
                      Please Select
                    </option>
                    <option value="all">All Attendees</option>
                    <option value="vip">VIP Only</option>
                    <option value="speakers">Speakers Only</option>
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
                        d="M8.31068 0.193108C8.57471 -0.0643956 9.00279 -0.0643956 9.26682 0.193108C9.53085 0.450612 9.53085 0.868109 9.26682 1.12561L5.21024 5.0819C4.95429 5.33152 4.54215 5.34026 4.27532 5.10171L0.218738 1.47512C-0.0565142 1.22904 -0.075108 0.811938 0.177206 0.543491C0.42952 0.275045 0.857196 0.25691 1.13245 0.502986L4.71184 3.70297L8.31068 0.193108Z"
                        fill="#434349"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- Description Field -->
            <div>
              <label class="block text-base font-medium text-[#212529] mb-2"
                >Description</label
              >
              <textarea
                [(ngModel)]="formData.description"
                rows="6"
                placeholder="Enter description..."
                class="w-full px-4 py-3 border-2 border-[#CED4DA] rounded placeholder:text-[#C2C3CB] text-base focus:outline-none focus:border-[#009FD8] transition-colors resize-none"
              ></textarea>
            </div>

            <!-- Upload Document Field -->
            <div>
              <label class="block text-base font-medium text-[#212529] mb-2"
                >Upload Document</label
              >
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
                  Drop file here or click to upload.
                </p>
                <input
                  #fileInput
                  type="file"
                  class="hidden"
                  (change)="onFileSelected($event)"
                />
              </div>
              <p
                *ngIf="formData.fileName"
                class="mt-2 text-sm text-[#212529]"
              >
                Selected: {{ formData.fileName }}
              </p>
            </div>
          </div>
        </div>

        <!-- Fixed Footer -->
        <div
          class="flex items-center justify-end gap-4 px-8 py-5 border-t border-gray-200 flex-shrink-0"
        >
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
                d="M0.620965 12C0.462896 12 0.304826 11.9399 0.184729 11.8189C-0.0563682 11.5778 -0.0563682 11.1869 0.184729 10.9458L10.9497 0.180823C11.1908 -0.0602744 11.5817 -0.0602744 11.8228 0.180823C12.0639 0.421921 12.0639 0.8128 11.8228 1.05405L1.05795 11.8189C0.936954 11.9392 0.778884 12 0.620965 12Z"
                fill="#4C546C"
              />
              <path
                d="M11.3867 12C11.2287 12 11.0707 11.9399 10.9505 11.8189L0.184729 1.05405C-0.0563682 0.8128 -0.0563682 0.421921 0.184729 0.180823C0.425827 -0.0602744 0.816707 -0.0602744 1.05795 0.180823L11.8228 10.9458C12.0639 11.1869 12.0639 11.5778 11.8228 11.8189C11.7018 11.9392 11.5439 12 11.3867 12Z"
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
                d="M13.7432 3.76582C14.0231 4.01076 14.0485 4.43749 13.7995 4.71384L6.79025 12.4937C6.53996 12.7715 6.11021 12.7892 5.83796 12.5329L1.78194 8.7145C1.529 8.47637 1.50478 8.07957 1.7218 7.8083C1.96127 7.50897 2.40721 7.46777 2.6922 7.7241L5.83913 10.5547C6.11261 10.8007 6.53366 10.7787 6.78005 10.5056L12.8091 3.82096C13.053 3.55046 13.4691 3.52594 13.7432 3.76582Z"
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
export class AddScheduleModalComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  formData = {
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    speakers: "",
    scheduleFor: "",
    description: "",
    fileName: "",
  };

  onClose() {
    this.close.emit();
  }

  onSave() {
    this.save.emit(this.formData);
  }

  onOverlayClick(event: MouseEvent) {
    this.onClose();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.formData.fileName = input.files[0].name;
    }
  }
}
