'use client';

import { useParams, useRouter } from 'next/navigation';
import AddReviewModal from '@/components/blocks/AddReviewModal/AddReviewModal';

<<<<<<< HEAD
export default async function AddReviewPage({ params }: Props) {
  return <div></div>;
=======
export default function AddReviewPage() {
  const router = useRouter();
  const params = useParams();
  const locationId = params.locationId as string;

  return <AddReviewModal locationId={locationId} onClose={() => router.back()} />;
>>>>>>> 2df84bf182ad08bf465f4393a4a923a388fda7e1
}
