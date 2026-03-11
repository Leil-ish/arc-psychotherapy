#!/usr/bin/env node

const [major] = process.versions.node.split('.').map(Number);

if (major !== 20) {
  console.error(`\n[deploy check] Node ${process.version} detected.`);
  console.error('[deploy check] Use Node 20 LTS for OpenNext/Cloudflare deploys.');
  console.error('Run: nvm install 20 && nvm use 20\n');
  process.exit(1);
}

console.log(`[deploy check] Node ${process.version} OK`);
