import { useEffect } from "react";
import { useLocation } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const categories = [
  { id: "spa", label: "Spa Services" },
  { id: "hair", label: "Hair" },
  { id: "face", label: "Face & Laser" },
  { id: "nails", label: "Nails" },
  { id: "massage", label: "Massage" },
];

const menuData = {
  spa: {
    heroTitle: "Japanese Head Spa",
    heroSubtitle: "Scalp Detox & Relaxation at Andrea's Wellness Clinic",
    heroDesc: "Premium Josiane Laure products from France and Milbon technology from Japan to deliver a truly results-driven and luxurious head spa experience.",
    heroImage: "https://images.unsplash.com/photo-1649541608931-c1457812c94f",
    sections: [
      {
        title: "Signature Spa Treatments",
        items: [
          { name: "Japanese Head Spa (60 Min)", desc: "Deep cleansing, scalp massage, and steam therapy.", price: "₱4,500" },
          { name: "Japanese Head Spa (90 Min)", desc: "Extended massage with custom essential oil blends.", price: "₱6,500" },
          { name: "Scalp Detox Add-on", desc: "A perfect addition to any hair service.", price: "₱1,800" },
        ]
      }
    ]
  },
  hair: {
    heroTitle: "Hair Design",
    heroSubtitle: "Aspiration & Precision",
    heroDesc: "Our stylists are highly trained and continually educate themselves in precision and razor cuts, hair coloring, corrective coloring, straightening, keratin, permanent waves and customized hair conditioning.",
    heroImage: "https://images.unsplash.com/photo-1741816219998-be418d9cd1fc",
    sections: [
      {
        title: "Haircut & Style",
        description: "Our stylists are also accomplished colorists, which makes it easier to communicate a total vision of your coloring and styling desires.",
        items: [
          { name: "Women's Cut & Style", desc: "Precision haircut and style where your look will fit your personality and lifestyle.", price: "₱2,800" },
          { name: "Women's Cut", desc: "Our hair artists skillfully integrate the latest trends and timeless classics.", price: "₱2,200" },
          { name: "Blowout & Style", desc: "More than just a Style. This treatment will include a bang trim as well.", price: "₱1,500" },
          { name: "Curly to Straight", desc: "Need a quick-fix. Just relax. This choice treatment includes hair conditioner and ceramic flat smoothing.", price: "₱3,500" },
          { name: "Up-Do Styling", desc: "Each experience begins with an 'in-chair' consultation.", price: "₱2,800" },
        ]
      },
      {
        title: "Color Artistry",
        description: "We can create the latest color effects that are right for you and your lifestyle.",
        items: [
          { name: "Single Process", desc: "Root touch up and color balancing.", price: "₱3,800+" },
          { name: "Double Process", desc: "Lightening followed by custom toning.", price: "₱5,500+" },
          { name: "Partial Highlights", desc: "Strategic placement for dimension.", price: "₱6,500+" },
          { name: "Full Highlights", desc: "Comprehensive lightening and dimension.", price: "₱8,500+" },
        ]
      }
    ]
  },
  face: {
    heroTitle: "Face & Laser",
    heroSubtitle: "Clinical Precision Meets Luxury",
    heroDesc: "Advanced aesthetic treatments utilizing state-of-the-art laser technology and medical-grade skincare to address aging, pigmentation, and overall skin health.",
    heroImage: "https://images.unsplash.com/photo-1516691475576-56cf13710ae9",
    sections: [
      {
        title: "Clinical Facials",
        description: "Customized protocols targeting your specific skin concerns.",
        items: [
          { name: "Signature Glow Facial", desc: "Deep cleanse, exfoliation, extractions, and custom mask.", price: "₱3,500" },
          { name: "Anti-Aging Peptide Treatment", desc: "Infusion of growth factors and firming peptides.", price: "₱5,800" },
          { name: "Acne Clarifying Facial", desc: "Targeted treatment for active breakouts and congestion.", price: "₱3,800" },
        ]
      },
      {
        title: "Laser Aesthetics",
        description: "Non-invasive laser treatments for dramatic, lasting results. Consultation required.",
        items: [
          { name: "Laser Skin Rejuvenation", desc: "Stimulates collagen and improves skin texture.", price: "₱8,500" },
          { name: "Pigmentation Therapy", desc: "Targeted treatment for sun spots and melasma.", price: "₱7,500" },
          { name: "Laser Hair Removal (Face)", desc: "Permanent reduction for upper lip, chin, or full face.", price: "₱2,500+" },
        ]
      }
    ]
  },
  nails: {
    heroTitle: "Nail Studio",
    heroSubtitle: "Refined Hand & Foot Care",
    heroDesc: "Experience meticulous nail care in a deeply relaxing environment. We use only premium, non-toxic polishes and rigorous sanitization standards.",
    heroImage: "https://images.unsplash.com/photo-1599316329891-19df7fa9580d",
    sections: [
      {
        title: "Manicure & Pedicure",
        items: [
          { name: "Signature Manicure", desc: "Cuticle care, shaping, massage, and polish.", price: "₱900" },
          { name: "Signature Pedicure", desc: "Foot soak, exfoliation, callus care, and polish.", price: "₱1,200" },
          { name: "Gel Manicure", desc: "Long-lasting, high-gloss gel polish.", price: "₱1,500" },
          { name: "Spa Pedicure Ritual", desc: "Extended massage, mask, and hot towel wrap.", price: "₱2,200" },
        ]
      },
      {
        title: "Enhancements & Add-ons",
        items: [
          { name: "Nail Art (Per Nail)", desc: "Custom designs and embellishments.", price: "₱150+" },
          { name: "Gel Removal", desc: "Safe, non-damaging removal of existing gel.", price: "₱300" },
          { name: "Paraffin Wax Treatment", desc: "Intense hydration for dry hands or feet.", price: "₱600" },
        ]
      }
    ]
  },
  massage: {
    heroTitle: "Massage Therapy",
    heroSubtitle: "Restorative Bodywork",
    heroDesc: "Melt away tension and restore muscular balance with our bespoke massage therapies, performed by expert therapists using organic botanical oils.",
    heroImage: "https://images.unsplash.com/photo-1719858511928-94db73c8de67",
    sections: [
      {
        title: "Therapeutic Massage",
        items: [
          { name: "Swedish Relaxation (60/90 Min)", desc: "Gentle, flowing strokes to improve circulation and reduce stress.", price: "₱2,500 / ₱3,500" },
          { name: "Deep Tissue Rescue (60/90 Min)", desc: "Targeted pressure to relieve chronic muscle tension.", price: "₱2,800 / ₱3,800" },
          { name: "Hot Stone Therapy (90 Min)", desc: "Smooth, heated stones to melt away deep-seated knots.", price: "₱4,500" },
          { name: "Aromatherapy Journey (90 Min)", desc: "Customized essential oil blend tailored to your mood.", price: "₱3,800" },
        ]
      }
    ]
  }
};

export function ServiceMenu() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  // Unified Section Template Component
  const ServiceCategoryTemplate = ({ 
    id, 
    data 
  }: { 
    id: string; 
    data: typeof menuData.spa 
  }) => (
    <section id={id} className="scroll-mt-32">
      <div className="relative w-full h-[60vh] min-h-[500px] mb-16 overflow-hidden flex items-end">
        <ImageWithFallback 
          src={data.heroImage} 
          alt={data.heroTitle} 
          className="absolute inset-0 w-full h-full object-cover object-top" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 via-zinc-900/50 to-transparent" />
        <div className="relative z-10 p-8 md:p-16 max-w-2xl text-left">
          <h2 className="font-serif text-4xl md:text-6xl text-[#F9F6F0] mb-4 tracking-wide">{data.heroTitle}</h2>
          <p className="font-sans text-sm tracking-wider text-[#D4AF37] mb-6 uppercase">{data.heroSubtitle}</p>
          <p className="font-sans text-sm text-zinc-300 leading-relaxed max-w-lg">{data.heroDesc}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-4 md:px-0 border-b border-zinc-200/50 pb-24 mb-24 last:border-0 last:pb-0 last:mb-0">
        {data.sections.map((section, idx) => (
          <div key={idx} className="w-full">
            <h3 className="font-serif text-2xl text-zinc-900 mb-4 tracking-wide">{section.title}</h3>
            {section.description && (
              <p className="font-sans text-sm text-zinc-500 mb-8 italic">{section.description}</p>
            )}
            <div className={`flex flex-col space-y-8 ${!section.description ? 'mt-8' : ''}`}>
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex flex-col space-y-2 group">
                  <div className="flex justify-between items-baseline gap-4">
                    <h4 className="font-sans text-sm font-medium tracking-[0.1em] text-zinc-900 uppercase group-hover:text-[#D4AF37] transition-colors">
                      {item.name}
                    </h4>
                    <span className="font-sans text-sm font-medium text-zinc-900 whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed pr-8">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="w-full bg-[#F9F6F0] min-h-screen text-zinc-900 pt-24">
      {/* Top Banner */}
      <div className="w-full h-[40vh] min-h-[300px] relative bg-zinc-900 flex items-center justify-center overflow-hidden">
         <ImageWithFallback 
            src="https://images.unsplash.com/photo-1633526543913-d30e3c230d1f" 
            alt="Spa Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
         />
         <div className="relative z-10 text-center px-4">
            <h1 className="font-serif text-4xl md:text-6xl tracking-[0.15em] text-[#F9F6F0] uppercase font-light mb-4">Our Services</h1>
            <p className="font-sans text-xs md:text-sm tracking-[0.3em] text-[#D4AF37] uppercase">Elevate Your Wellbeing</p>
         </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Sidebar Navigation */}
        <aside className="lg:w-64 shrink-0">
          <div className="sticky top-32 flex flex-col space-y-2">
            <h3 className="font-serif text-2xl tracking-[0.1em] text-zinc-900 mb-8 border-b border-zinc-200 pb-4">Menu</h3>
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="font-sans text-xs md:text-sm tracking-[0.2em] text-zinc-500 hover:text-[#D4AF37] hover:bg-zinc-100 uppercase py-3 px-4 transition-all duration-300 border-l-2 border-transparent hover:border-[#D4AF37]"
              >
                {cat.label}
              </a>
            ))}
            <div className="pt-12">
               <a
                href="#book"
                className="inline-block w-full text-center bg-zinc-900 text-[#F9F6F0] px-6 py-4 font-sans text-[10px] tracking-[0.25em] uppercase hover:bg-[#D4AF37] transition-colors duration-300"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content Area - Rendering via Unified Template */}
        <div className="flex-1">
          {Object.entries(menuData).map(([key, data]) => (
            <ServiceCategoryTemplate key={key} id={key} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
