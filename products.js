const products = [
    // ==========================================
    // 💊 CATEGORY 1: ESSENTIAL MEDICINES (20 Products)
    // ==========================================
    { id: 1, name: "Panadol Advance", category: "medicines", price: 50, badge: "Popular", image: "https://images.pexels.com/photos/3652898/pexels-photo-3652898.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 2, name: "Disprin Tablets", category: "medicines", price: 40, badge: "", image: "https://images.pexels.com/photos/5994326/pexels-photo-5994326.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 3, name: "Brufen 400mg", category: "medicines", price: 120, badge: "Sale", image: "https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 4, name: "Arinac Forte", category: "medicines", price: 180, badge: "", image: "https://images.pexels.com/photos/3652097/pexels-photo-3652097.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 5, name: "Augmentin 625mg", category: "medicines", price: 250, badge: "Antibiotic", image: "https://images.unsplash.com/photo-1584308666744-24d5e478ebbf?auto=format&fit=crop&w=600&q=80" },
    { id: 6, name: "Flagyl 400mg", category: "medicines", price: 90, badge: "", image: "https://images.pexels.com/photos/159211/pexels-photo-159211.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 7, name: "Ponstan Forte", category: "medicines", price: 110, badge: "", image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 8, name: "Nuberol Forte", category: "medicines", price: 140, badge: "Pain Relief", image: "https://images.unsplash.com/photo-1550572017-edb799988b48?auto=format&fit=crop&w=600&q=80" },
    { id: 9, name: "Calpol 500mg", category: "medicines", price: 60, badge: "", image: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 10, name: "Surbex Z", category: "medicines", price: 320, badge: "Vitamins", image: "https://images.pexels.com/photos/5994443/pexels-photo-5994443.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 11, name: "CAC 1000 Plus", category: "medicines", price: 210, badge: "Calcium", image: "https://images.pexels.com/photos/3652898/pexels-photo-3652898.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 12, name: "Risek 40mg", category: "medicines", price: 280, badge: "", image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&q=80" },
    { id: 13, name: "Nexum 40mg", category: "medicines", price: 350, badge: "", image: "https://images.pexels.com/photos/5994326/pexels-photo-5994326.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 14, name: "Panadol Extra", category: "medicines", price: 80, badge: "Fast Action", image: "https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 15, name: "Panadol CF", category: "medicines", price: 75, badge: "Flu", image: "https://images.unsplash.com/photo-1584308666744-24d5e478ebbf?auto=format&fit=crop&w=600&q=80" },
    { id: 16, name: "Erythrocin 250mg", category: "medicines", price: 160, badge: "", image: "https://images.pexels.com/photos/159211/pexels-photo-159211.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 17, name: "Zyrtec 10mg", category: "medicines", price: 130, badge: "Allergy", image: "https://images.unsplash.com/photo-1550572017-edb799988b48?auto=format&fit=crop&w=600&q=80" },
    { id: 18, name: "Rigix", category: "medicines", price: 95, badge: "", image: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 19, name: "Septran DS", category: "medicines", price: 85, badge: "", image: "https://images.pexels.com/photos/3652097/pexels-photo-3652097.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 20, name: "Novidat 500mg", category: "medicines", price: 290, badge: "Top Rated", image: "https://images.pexels.com/photos/5994443/pexels-photo-5994443.jpeg?auto=compress&cs=tinysrgb&w=600" },

    // ==========================================
    // 💄 CATEGORY 2: COSMETICS & BEAUTY (20 Products)
    // ==========================================
    { id: 21, name: "Glow & Lovely", category: "cosmetic-creams", price: 250, badge: "Best Seller", image: "https://images.pexels.com/photos/4465828/pexels-photo-4465828.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 22, name: "Ponds Age Miracle", category: "cosmetic-creams", price: 850, badge: "Premium", image: "https://images.pexels.com/photos/3785149/pexels-photo-3785149.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 23, name: "Nivea Soft Cream", category: "cosmetic-creams", price: 450, badge: "", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80" },
    { id: 24, name: "Olay Regenerist", category: "cosmetic-creams", price: 1800, badge: "Luxury", image: "https://images.pexels.com/photos/4668513/pexels-photo-4668513.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 25, name: "L'Oreal Revitalift", category: "cosmetic-creams", price: 1500, badge: "", image: "https://images.pexels.com/photos/5009982/pexels-photo-5009982.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 26, name: "Garnier Fast Bright", category: "cosmetic-creams", price: 550, badge: "Vitamin C", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80" },
    { id: 27, name: "Himalaya Herbals", category: "cosmetic-creams", price: 300, badge: "Organic", image: "https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 28, name: "Fair & Handsome", category: "cosmetic-creams", price: 280, badge: "Men", image: "https://images.pexels.com/photos/4465828/pexels-photo-4465828.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 29, name: "Clean & Clear", category: "cosmetic-creams", price: 350, badge: "", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80" },
    { id: 30, name: "Neutrogena Hydro", category: "cosmetic-creams", price: 1200, badge: "Hydrating", image: "https://images.pexels.com/photos/4668513/pexels-photo-4668513.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 31, name: "Vaseline Intensive", category: "cosmetic-creams", price: 400, badge: "", image: "https://images.pexels.com/photos/3785149/pexels-photo-3785149.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 32, name: "Jergens Aloe", category: "cosmetic-creams", price: 650, badge: "Soothing", image: "https://images.pexels.com/photos/5009982/pexels-photo-5009982.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 33, name: "Dove Beauty Cream", category: "cosmetic-creams", price: 380, badge: "", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80" },
    { id: 34, name: "Cetaphil Moisturizer", category: "cosmetic-creams", price: 1600, badge: "Dermatologist", image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 35, name: "CeraVe Daily", category: "cosmetic-creams", price: 2100, badge: "Trending", image: "https://images.pexels.com/photos/3993310/pexels-photo-3993310.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 36, name: "Palmer's Cocoa", category: "cosmetic-creams", price: 950, badge: "", image: "https://images.pexels.com/photos/4465828/pexels-photo-4465828.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 37, name: "Olay Total Effects", category: "cosmetic-creams", price: 1450, badge: "Anti-Aging", image: "https://images.pexels.com/photos/4668513/pexels-photo-4668513.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 38, name: "Biore UV Aqua", category: "cosmetic-creams", price: 1100, badge: "Sunblock", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80" },
    { id: 39, name: "The Ordinary Vit C", category: "cosmetic-creams", price: 2500, badge: "Imported", image: "https://images.pexels.com/photos/3785149/pexels-photo-3785149.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 40, name: "Ponds White Beauty", category: "cosmetic-creams", price: 420, badge: "", image: "https://images.pexels.com/photos/5009982/pexels-photo-5009982.jpeg?auto=compress&cs=tinysrgb&w=600" },

    // ==========================================
    // 🏥 CATEGORY 3: MEDICATED CREAMS (20 Products)
    // ==========================================
    { id: 41, name: "Betnovate N", category: "medicated-creams", price: 120, badge: "Effective", image: "https://images.pexels.com/photos/4465830/pexels-photo-4465830.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 42, name: "Hydrocortisone 1%", category: "medicated-creams", price: 180, badge: "Prescription", image: "https://images.pexels.com/photos/3652733/pexels-photo-3652733.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 43, name: "Fucidin Ointment", category: "medicated-creams", price: 350, badge: "Antibacterial", image: "https://images.unsplash.com/photo-1611078500201-447545464459?auto=format&fit=crop&w=600&q=80" },
    { id: 44, name: "Polyfax Eye Ointment", category: "medicated-creams", price: 90, badge: "", image: "https://images.pexels.com/photos/4047000/pexels-photo-4047000.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 45, name: "Dermovate Cream", category: "medicated-creams", price: 140, badge: "", image: "https://images.pexels.com/photos/3652732/pexels-photo-3652732.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 46, name: "Kenacomb Ointment", category: "medicated-creams", price: 210, badge: "Healing", image: "https://images.pexels.com/photos/5998135/pexels-photo-5998135.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 47, name: "Travocort Cream", category: "medicated-creams", price: 320, badge: "Antifungal", image: "https://images.pexels.com/photos/4465830/pexels-photo-4465830.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 48, name: "Lotrimin Ultra", category: "medicated-creams", price: 550, badge: "", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80" },
    { id: 49, name: "Lamisil Cream", category: "medicated-creams", price: 480, badge: "", image: "https://images.pexels.com/photos/3652733/pexels-photo-3652733.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 50, name: "Zovirax Cream", category: "medicated-creams", price: 420, badge: "Antiviral", image: "https://images.pexels.com/photos/4047000/pexels-photo-4047000.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 51, name: "Bactroban Ointment", category: "medicated-creams", price: 290, badge: "", image: "https://images.pexels.com/photos/3652732/pexels-photo-3652732.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 52, name: "Differin Gel", category: "medicated-creams", price: 850, badge: "Acne", image: "https://images.pexels.com/photos/5998121/pexels-photo-5998121.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 53, name: "Epiduo Gel", category: "medicated-creams", price: 1200, badge: "Pimple Care", image: "https://images.unsplash.com/photo-1611078500201-447545464459?auto=format&fit=crop&w=600&q=80" },
    { id: 54, name: "Benzac AC 5%", category: "medicated-creams", price: 650, badge: "", image: "https://images.pexels.com/photos/4465830/pexels-photo-4465830.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 55, name: "Canesten Cream", category: "medicated-creams", price: 380, badge: "", image: "https://images.pexels.com/photos/3652733/pexels-photo-3652733.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 56, name: "Daktarin Oral Gel", category: "medicated-creams", price: 220, badge: "Oral", image: "https://images.pexels.com/photos/4047000/pexels-photo-4047000.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 57, name: "Elidel Cream", category: "medicated-creams", price: 1800, badge: "Eczema", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80" },
    { id: 58, name: "Protopic Ointment", category: "medicated-creams", price: 2100, badge: "", image: "https://images.pexels.com/photos/3652732/pexels-photo-3652732.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 59, name: "Terbinafine Cream", category: "medicated-creams", price: 450, badge: "", image: "https://images.pexels.com/photos/5998135/pexels-photo-5998135.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 60, name: "Mometasone Furoate", category: "medicated-creams", price: 300, badge: "Steroid", image: "https://images.pexels.com/photos/5998121/pexels-photo-5998121.jpeg?auto=compress&cs=tinysrgb&w=600" }
];