// import { getBlogPosts, getPost } from "@/data/blog";
// import { DATA } from "@/data/resume";
// import { formatDate } from "@/lib/utils";
// import { notFound } from "next/navigation";
// import { Suspense } from "react";
// import type { Metadata, ResolvingMetadata } from "next";

// // Corrected Props type
// type Props = {
//   params: { slug: string };  // Must be an object with slug property
//   searchParams?: { [key: string]: string | string[] | undefined };
// };

// export async function generateStaticParams() {
//   const posts = await getBlogPosts();
//   return posts.map((post) => ({
//     slug: post.slug,  // This matches the params structure
//   }));
// }

// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const post = await getPost(params.slug);  // Access slug property
//   if (!post) return {};

//   const {
//     title,
//     publishedAt: publishedTime,
//     summary: description,
//     image,
//   } = post.metadata;

//   const previousImages = (await parent).openGraph?.images || [];
//   const ogImage = image
//     ? `${DATA.url}${image}`
//     : `${DATA.url}/og?title=${encodeURIComponent(title)}`;

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       type: "article",
//       publishedTime,
//       url: `${DATA.url}/blog/${params.slug}`,  // Use params.slug
//       images: [ogImage, ...previousImages],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [ogImage],
//     },
//   };
// }

// export default async function BlogPostPage({ params }: Props) {
//   const post = await getPost(params.slug);  // Access slug property
//   if (!post) notFound();

//   return (
//     <section id="blog">
//       <script
//         type="application/ld+json"
//         suppressHydrationWarning
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "BlogPosting",
//             headline: post.metadata.title,
//             datePublished: post.metadata.publishedAt,
//             dateModified: post.metadata.publishedAt,
//             description: post.metadata.summary,
//             image: post.metadata.image
//               ? `${DATA.url}${post.metadata.image}`
//               : `${DATA.url}/og?title=${encodeURIComponent(post.metadata.title)}`,
//             url: `${DATA.url}/blog/${params.slug}`,  // Use params.slug
//             author: {
//               "@type": "Person",
//               name: DATA.name,
//             },
//           }),
//         }}
//       />
      
//       <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
//         {post.metadata.title}
//       </h1>
      
//       <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
//         <Suspense fallback={<p className="h-5" />}>
//           <p className="text-sm text-neutral-600 dark:text-neutral-400">
//             {formatDate(post.metadata.publishedAt)}
//           </p>
//         </Suspense>
//       </div>
      
//       <article
//         className="prose dark:prose-invert"
//         dangerouslySetInnerHTML={{ __html: post.source }}
//       />
//     </section>
//   );
// }

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page