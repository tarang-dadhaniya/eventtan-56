import { Component, Output, EventEmitter, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { GalleryImage } from "../services/image-gallery.service";

@Component({
  selector: "app-add-image-gallery-modal",
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
          <h2 class="text-[22px] font-medium text-[#3F4254]">
            {{ editMode ? "Edit Gallery Image" : "Add Gallery Image" }}
          </h2>
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
            <!-- Title Field -->
            <div>
              <label class="block text-base font-medium text-[#212529] mb-2">
                Title
              </label>
              <input
                type="text"
                [(ngModel)]="formData.title"
                placeholder="Enter Image Title"
                class="w-full h-[50px] px-5 border-2 border-[#E9EBEC] rounded placeholder:text-[#C2C3CB] text-base focus:outline-none focus:border-[#009FD8] transition-colors"
              />
            </div>

            <!-- Image URL Field -->
            <div>
              <label class="block text-base font-medium text-[#212529] mb-2">
                Image URL
              </label>
              <input
                type="url"
                [(ngModel)]="formData.imageUrl"
                placeholder="Enter Image URL or click to upload"
                class="w-full h-[50px] px-5 border-2 border-[#E9EBEC] rounded placeholder:text-[#C2C3CB] text-base focus:outline-none focus:border-[#009FD8] transition-colors"
              />
              <div class="mt-3 text-sm text-[#878A99]">
                Paste the image URL or use the upload button below
              </div>
            </div>

            <!-- Image Upload -->
            <div>
              <label class="block text-base font-medium text-[#212529] mb-2">
                Upload Image
              </label>
              <div
                class="w-full border-2 border-dashed border-[#CED4DA] rounded p-6 text-center cursor-pointer hover:border-[#009FD8] transition-colors"
                (click)="fileInput.click()"
              >
                <svg
                  class="mx-auto mb-2 w-8 h-8 text-[#878A99]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p class="text-[#353846] font-medium">
                  Click to upload or drag and drop
                </p>
                <p class="text-sm text-[#878A99]">PNG, JPG, GIF up to 10MB</p>
              </div>
              <input
                #fileInput
                type="file"
                class="hidden"
                accept="image/*"
                (change)="onImageSelected($event)"
              />
              <div *ngIf="imagePreview" class="mt-4">
                <img
                  [src]="imagePreview"
                  alt="Preview"
                  class="max-h-48 max-w-full rounded border border-[#E9EBEC]"
                />
              </div>
            </div>

            <!-- Caption Field -->
            <div>
              <label class="block text-base font-medium text-[#212529] mb-2">
                Caption (Optional)
              </label>
              <textarea
                [(ngModel)]="formData.caption"
                placeholder="Enter Image Caption"
                class="w-full h-24 px-5 py-3 border-2 border-[#E9EBEC] rounded placeholder:text-[#C2C3CB] text-base focus:outline-none focus:border-[#009FD8] transition-colors resize-none"
              ></textarea>
            </div>
          </div>
        </div>

        <!-- Fixed Footer -->
        <div
          class="border-t border-gray-200 px-8 py-4 flex justify-end gap-3 flex-shrink-0"
        >
          <button
            (click)="onClose()"
            class="px-6 py-2 border-2 border-[#E9EBEC] rounded text-[#353846] font-semibold hover:border-[#049AD0] hover:text-[#049AD0] transition-colors"
          >
            Cancel
          </button>
          <button
            (click)="onSave()"
            [disabled]="!isFormValid()"
            class="px-8 py-2 bg-[#009FD8] hover:bg-[#0385b5] text-white rounded font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ editMode ? "Update Image" : "Add Image" }}
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class AddImageGalleryModalComponent {
  @Input() isOpen = false;
  @Input() editingImage: GalleryImage | null = null;
  @Output() save = new EventEmitter<
    Omit<GalleryImage, "id" | "eventId" | "createdAt">
  >();
  @Output() close = new EventEmitter<void>();

  editMode = false;
  imagePreview: string | null = null;

  formData = {
    title: "",
    imageUrl: "",
    caption: "",
  };

  ngOnChanges() {
    if (this.isOpen && this.editingImage) {
      this.editMode = true;
      this.formData = {
        title: this.editingImage.title,
        imageUrl: this.editingImage.imageUrl,
        caption: this.editingImage.caption || "",
      };
      this.imagePreview = this.editingImage.imageUrl;
    } else if (this.isOpen && !this.editingImage) {
      this.editMode = false;
      this.resetForm();
    }
  }

  isFormValid(): boolean {
    return (
      this.formData.title.trim() !== "" && this.formData.imageUrl.trim() !== ""
    );
  }

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
        this.formData.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSave(): void {
    if (this.isFormValid()) {
      this.save.emit({
        title: this.formData.title,
        imageUrl: this.formData.imageUrl,
        caption: this.formData.caption || undefined,
      });
      this.resetForm();
    }
  }

  onClose(): void {
    this.resetForm();
    this.close.emit();
  }

  onOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }

  private resetForm(): void {
    this.formData = {
      title: "",
      imageUrl: "",
      caption: "",
    };
    this.imagePreview = null;
    this.editMode = false;
  }
}
