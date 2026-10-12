import { ExerciseWrapper } from "../components/layout/ExerciseWrapper";
import { ProductCard } from "../components/ui/ProductCard";

export function Ex04ProductCard() {
  return (
    <ExerciseWrapper
      number="04"
      title="Product Card"
      subtitle="group-hover + content hierarchy + CTA"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProductCard
          name="Velocity Runner"
          category="RUN"
          badge="NEW"
          badgeVariant="success"
          bannerVariant="blue"
          description="Lightweight everyday performance sneaker."
          price="R$ 499"
        />

        <ProductCard
          name="Cloud Stride Pro"
          category="PRO"
          badge="HOT"
          badgeVariant="warning"
          bannerVariant="violet"
          description="Maximum cushioning for long-distance marathons."
          price="R$ 649"
        />

        <ProductCard
          name="Aero Trail Grip"
          category="TRAIL"
          badge="OUTDOOR"
          badgeVariant="info"
          bannerVariant="emerald"
          description="Waterproof traction built for rugged mountain tracks."
          price="R$ 589"
        />
      </div>
    </ExerciseWrapper>
  );
}

export default Ex04ProductCard;