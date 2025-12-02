# ERP-Based Student Management System

A full-stack **Institutional ERP Platform** designed to streamline and digitize core academic and administrative workflows. This system enables seamless management of admissions, fee payments, hostel allocation, user roles, real-time analytics, and communication. Built with modern web technologies for performance, security, and scalability.

---

## 🚀 Features

### **1. Multi-Role Dashboards**

* **Student Dashboard** – Profile, fee status, academic info, hostel details, notifications.
* **Staff Dashboard** – Student oversight, approvals, communication modules.
* **Admin Dashboard** – User management, financial overview, institute-wide analytics.

### **2. Online Payments (Razorpay Integration)**

* Secure order creation
* Real-time payment verification (HMAC signature)
* Automatic transaction status updates
* Payment history tracking

### **3. Authentication & Authorization**

* JWT-based login system
* Role-based access control (RBAC)
* HTTP-only cookies for secure auth persistence

### **4. Communication & Notifications**

* Automated transactional emails using **SendGrid API**
* Fee reminders, registration updates, approval notifications

### **5. Real-Time Analytics Dashboard**

* Institution-wide summary cards
* Revenue charts, enrolment stats, hostel occupancy
* Dynamic data visualization for admin insights

### **6. Responsive & Modern UI**

* Built with **React.js**
* Intuitive user experience
* Mobile-friendly design with reusable components

### **7. Robust Backend Architecture**

* Node.js + Express.js REST API
* PostgreSQL relational database
* Secure CRUD operations and validation
* Optimized database schema for scalable queries

---



## 🛠️ Tech Stack

### **Frontend**

* React.js
* HTML5, CSS3, JavaScript (ES6+)
* Axios for API communication

### **Backend**

* Node.js
* Express.js
* PostgreSQL (pg library)
* JWT Authentication
* Bcrypt hashing

### **Integrations**

* Razorpay Payment Gateway
* SendGrid Email Service

### **Tools & Deployment**

* Git & GitHub
* VS Code
* Render / Vercel / Railway (optional deployment platforms)

---



## ▶️ Running the Project Locally

### **1. Clone the repository**

```bash
git clone https://github.com/your-username/erp-system.git
cd erp-system
```

### **2. Install dependencies**

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd ../server
npm install
```

### **3. Environment Variables**

Create a `.env` file inside **server** folder with:

```
PORT=5000
JWT_SECRET=your_secret_key
DATABASE_URL=postgres_connection_string
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
SENDGRID_API_KEY=your_sendgrid_key
```

### **4. Start Servers**

**Backend:**

```bash
cd server
npm start
```

**Frontend:**

```bash
cd client
npm start
```

---

## 🧠 Key Functional Modules

### **Admissions Module**

* Student registration
* Document verification workflow
* Admin approval pipeline

### **Fee Management**

* Online payments
* Automated receipts
* Due tracking

### **Hostel Allocation**

* Room assignment engine
* Availability tracking
* Admin override options

### **User Access Control**

* Student, staff, admin roles
* Protected routes
* Token validation middleware

### **Communication Module**

* Email triggers
* New announcements
* Event reminders

---

## 🔐 Security Highlights

* JWT + HTTP-only cookies for secure auth
* Bcrypt password hashing
* Input validation & sanitization
* Secure payment signature verification
* Proper role-based permissions

---

## 📊 Future Enhancements

* Multi-factor authentication (MFA)
* AI-based performance analytics
* Timetable + attendance automation
* Chatbot for query resolution
* Admin workflow automation

---

## 🧾 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Ayush Panwar**

Feel free to contribute, open issues, or suggest features!
