import React from 'react';
import PromoVideoCard from '../components/PromoVideoCard';

export default function Home() {
  return (
    <div>
      <PromoVideoCard
        src="/videos/Generativni_ai.mp4"
        title="Představení Grove Tech AI"
        desc="AI asistent s lidskou tváří • napojení na ERP/CRM • expertní integrace"
      />
    </div>
  );
}