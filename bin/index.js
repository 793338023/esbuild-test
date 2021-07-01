const esbuild = require("esbuild");

let envPlugin = {
  name: "https",
  setup(build) {
    const https = require("https");

    // 处理导入路径
    build.onResolve({ filter: /^https:\/\// }, (args) => {
      return {
        path: new URL(args.path).toString(),
        namespace: "https-util",
      };
    });

    // 根据导入路径或者命名空间，处理导入内容
    build.onLoad({ filter: /.*/, namespace: "https-util" }, async (args) => {
      console.log(args);

      const content = await new Promise((resolve, reject) => {
        https.get(args.path, (res) => {
          let chunks = [];
          res.on("data", (chunk) => chunks.push(chunk));
          res.on("end", () => resolve(Buffer.concat(chunks)));
        }).on('error', reject);
      });

      return {
        contents: content,
      };
    });
  },
};

esbuild
  .build({
    entryPoints: ["App.jsx"],
    bundle: true,
    outfile: "dist/bundle.js",
    plugins: [envPlugin],
  })
  .catch(() => process.exit(1));
