"# typescript-essentials" 
npm init -y
pnpm i --save-dev typescript
npx tsc --init
uncomment "noEmitOnError": true in tsconfig to prevent a conversion of ts to js if there is an error


"Using Vite bundler"
pnpm create vite@latest .
pnpm i