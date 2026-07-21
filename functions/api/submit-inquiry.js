// Cloudflare Pages Function
// Lives at: /functions/api/submit-inquiry.js
// This runs on Cloudflare's servers (not in the visitor's browser), so it can
// safely call the GHL webhook without hitting any CORS restrictions.

export async function onRequestPost({ request }) {
  try {
    const data = await request.json();

    const ghlResponse = await fetch(
      'https://services.leadconnectorhq.com/hooks/lGsLj5YLIHaQZIrGoBmW/webhook-trigger/4bf41f74-b7ff-4c72-b551-4406bbbea758',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }
    );

    return new Response(JSON.stringify({ success: ghlResponse.ok }), {
      status: ghlResponse.ok ? 200 : 502,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
