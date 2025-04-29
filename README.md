# 🚆 Train Complaint Management System

A responsive, interactive web application designed to improve the experience of lodging complaints related to train services. This project showcases a well-structured complaint form, intuitive UI/UX, and unique image hover effects that visually enhance user interaction.

##  Features

- Complaint form with real-time validation (Name, Email, Phone, PNR)
-  Option to upload images as evidence
-  Alert system for invalid or incomplete fields
-  Smooth form show/hide toggling
- Scroll-to-top functionality
- **Unique hover effect**: Images seamlessly transition to alternate views on hover with a **5-second fade-in effect**
-  Clean UI layout with sectioned design for better content flow

##  Unique Hover Effect

This project features a custom image hover effect that reveals a new image with a **gradual 5-second fade-in transition**:

```css
.hover-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 5s ease;
    z-index: 2;
}
.image-container:hover .hover-image {
    opacity: 1;
}
.image-container:hover .normal-image {
    opacity: 0;
}
```

This effect is ideal for showing "before and after" comparisons, enhanced visuals, or interactive storytelling in image galleries.

##  Tech Stack

- **HTML5** – Semantic structure
- **CSS3** – Custom styling and hover effects
- **JavaScript** – Form validation, UI interactivity
- **Font Awesome** – Icons

##  Folder Structure

```
.
├── index.html
├── js.js
├── css.css
├── /images
│   ├── img1.jpeg, img2.jpeg, ...
├── /assets
│   └── train.jpg, banner images, etc.
```

##  Screenshots

_Add screenshots here to showcase the hover effect and the complaint form UI._

##  Validation Rules

- **Name**: Must contain only alphabets and spaces
- **Email**: Must follow valid email format
- **Phone**: Exactly 10 digits
- **PNR**: 10-character alphanumeric

All validation feedback is provided with both **inline messages** and **JavaScript alerts**.

##  How to Run

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/train-complaint-system.git
   cd train-complaint-system
   ```

2. Open `index.html` in your browser:
   ```bash
   open index.html
   ```

> No backend or database is integrated yet — this is a **frontend prototype** focused on validation, interactivity, and UX design.

##  What I Learned

- JavaScript DOM manipulation and event handling
- Real-time form validation
- Advanced CSS transitions and image layering
- Structuring web applications with good UX principles

##  Future Enhancements

- Backend integration (Node.js/Express + MongoDB)
- Complaint tracking with status updates
- User authentic
