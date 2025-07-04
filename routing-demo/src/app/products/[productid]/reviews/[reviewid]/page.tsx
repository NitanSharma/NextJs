import { notFound } from "next/navigation";

export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  if(parseInt(reviewId) > 1000){
    notFound();
    // notFound function does not accept props
  }
  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
}
