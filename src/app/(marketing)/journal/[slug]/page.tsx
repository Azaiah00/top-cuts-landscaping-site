// Single journal post — magazine layout.
// Hero, byline, body, related posts, JSON-LD BlogPosting.

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getPostBySlug, postSlugs, postsByDate } from "@/content/journal";
import { CTABand } from "@/components/sections/CTABand";
import { PostBody } from "@/components/sections/PostBody";
import { Reveal } from "@/components/sections/Reveal";
import { SectionEyebrow } from "@/components/sections/SectionEyebrow";
import { buildMetadata, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/journal/${post.slug}`,
    image: post.hero,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function JournalPost(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Three other recent posts for the bottom carousel
  const more = postsByDate.filter((p) => p.slug !== post.slug).slice(0, 3);

  // BlogPosting JSON-LD
  const ld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.hero}`,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Top Cut Landscaping",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: `${SITE_URL}/journal/${post.slug}`,
  };

  return (
    <>
      <Script
        id={`ld-post-${post.slug}`}
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />

      {/* Header */}
      <section className="pt-36 md:pt-48 pb-12 md:pb-20 bg-tc-warm-cream">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl">
          <Reveal>
            <SectionEyebrow>{post.category}</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display font-medium text-[36px] md:text-[60px] leading-[1.05] tracking-[-0.02em] text-tc-deep-navy">
              {post.title}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-8 flex items-center gap-4 text-sm text-tc-stone">
              <span>{post.author}</span>
              <span aria-hidden>·</span>
              <span>{formatDate(post.date)}</span>
              <span aria-hidden>·</span>
              <span>{post.readingTime}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-tc-warm-cream pb-16 md:pb-24">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <Reveal>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-tc-fog">
              <Image
                src={post.hero}
                alt={post.heroAlt}
                fill
                priority
                sizes="(min-width:1024px) 70vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <section className="pb-24 md:pb-32 bg-tc-warm-cream">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl">
          <PostBody blocks={post.body} />
        </div>
      </section>

      {/* Related posts */}
      <section className="py-16 md:py-24 bg-tc-pure-white border-t border-tc-fog">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <SectionEyebrow>Keep reading</SectionEyebrow>
              <h2 className="mt-3 font-display text-3xl md:text-4xl text-tc-deep-navy">
                More from the journal.
              </h2>
            </div>
            <Link
              href="/journal"
              className="group inline-flex items-center gap-2 text-tc-deep-navy hover:text-tc-fresh-cut font-medium transition-colors"
            >
              All posts
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {more.map((p) => (
              <li key={p.slug}>
                <Link href={`/journal/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-tc-fog">
                    <Image
                      src={p.hero}
                      alt={p.heroAlt}
                      fill
                      sizes="(min-width:1024px) 32vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-tc-fresh-cut">
                    {p.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl text-tc-deep-navy leading-snug group-hover:text-tc-fresh-cut transition-colors">
                    {p.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand />
    </>
  );
}
