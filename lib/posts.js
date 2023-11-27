import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
//  import { remark } from 'remark';
//import html from 'remark-html';
import {unified} from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import highlight from 'rehype-highlight';
import html from 'rehype-stringify';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getSortedPostsData() {
    // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsDataa = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // file contents as html
    //const html = parseMarkDown(fileName)

    //const rem = remark().use(html);
    //const processedContent = await rem.process(matterResult.content);
    //const contentHtml = processedContent.toString();

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  const allPostsData = await Promise.all(allPostsDataa)

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id : fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);


  // Use remark to convert markdown into HTML string
  const processor = unified()
      .use(markdown)
      .use(remark2rehype)
      .use(highlight)
      .use(html);
  const processedContent = await processor.process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
      id,
      contentHtml,
      ...matterResult.data,
  };
}