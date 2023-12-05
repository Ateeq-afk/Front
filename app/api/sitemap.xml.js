
import { createReadStream } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';

export default async (req, res) => {
  try {
    // Create a stream to write the XML to
    const stream = new SitemapStream({ hostname: 'https://backpackersunited.in/' });
    
    // Add your URLs to the stream
    addUrlToStream(stream, '/');
    addUrlToStream(stream, '/destinations');
    // Add more URLs as needed

    // End the stream
    stream.end();

    // Convert the stream to a promise
    const xmlString = await streamToPromise(createReadStream(stream.path));

    // Send the XML response
    res.setHeader('Content-Type', 'text/xml');
    res.write(xmlString);
    res.end();
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};

// Helper function to add URLs to the stream
const addUrlToStream = (stream, path, lastmod = '2023-11-27T15:25:01+00:00', priority = 0.80) => {
  stream.write({
    url: path,
    changefreq: 'daily',
    lastmod,
    priority,
  });
};
