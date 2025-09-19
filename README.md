# ⚡ QUICKAI

QUICKAI is an AI-powered productivity platform that helps users **generate content, enhance images, and review resumes instantly** — saving valuable time and effort.  

The platform offers a **freemium model**: basic features are free, while advanced tools are available through a premium subscription managed by **Clerk Billing**.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Authentication & User Management:** Clerk  
- **Payments & Billing:** Clerk (PriceTable component)  
- **Database:** NeonDB (PostgreSQL)  
- **AI & APIs:**  
  - Google Gemini (via OpenAI API) – text generation & resume review  
  - Cloudinary AI – background removal & object removal  
  - Clipdrop API – AI image generation  

---

## ✨ Features

### 🆓 Free Plan
- **Generate Article** (length: Short – 800, Medium – 1200, Long – 1600 words)  
- **Generate Blog Titles**  

### 💎 Premium Plan
Includes **all Free features** +  
- **Generate Image** (AI-powered, with styles: Realistic, Ghibli, Anime, Cartoon)  
- **Remove Image Background** (Cloudinary background_removal effect)  
- **Remove Image Object** (Cloudinary gen_remove AI effect)  
- **Review Resume** (upload a file & get AI-powered feedback)  

---

## 📋 Detailed Feature List

1. **✍️ Write Article**  
   - Choose length: 800 (Short), 1200 (Medium), 1600 (Long)  
   - Powered by **Google Gemini AI**  

2. **📰 Blog Titles**  
   - Generate multiple catchy blog title suggestions  
   - Powered by **Google Gemini-2.0-flash**  

3. **🖼️ Remove Image Background**  
   - Upload any image and remove its background instantly  
   - Powered by **Cloudinary AI background_removal**  

4. **🎨 Generate Image**  
   - Enter a text prompt → generate AI images in different styles:  
     - Realistic  
     - Ghibli Style  
     - Anime Style  
     - Cartoon Style  
   - Option to publish generated images to the **Community**  

5. **✂️ Remove Image Object**  
   - Define unwanted objects in a text area → remove them from the image  
   - Powered by **Cloudinary AI gen_remove**  

6. **📄 Review Resume**  
   - Upload your resume file → get professional AI-based review & suggestions  
   - Powered by **Google Gemini AI**  

7. **🌐 Community**  
   - Browse published AI-generated images with their prompts  
   - Like or Unlike images shared by other users  

---

## 🖼️ Workflow

**Free User**  
Register/Login → Access Free Tools (Article, Blog Titles) → Upgrade for Premium


**Premium User**  
Register/Login → Access Free + Premium Tools → Generate, Edit, Review, Share → Join Community


---

## 💳 Payments & Subscriptions
- Managed entirely through **Clerk Billing**  
- **PriceTable Component** handles plan selection, upgrades, and payments  
- Premium plan unlocks **all advanced AI features**  

---

## 📊 Database Structure (NeonDB - PostgreSQL)

- **Users** → Managed via Clerk (authentication + billing)  
- **Articles** → Generated text (title, content, length, user reference)  
- **Images** → Prompt, style, Cloudinary/Clipdrop URLs, user reference, likes  
- **Resumes** → Uploaded resumes & AI review results  
- **Community** → Published images + user interactions (likes/unlikes)  

---

## 📌 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/quickai.git
   cd quickai
