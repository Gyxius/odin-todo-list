const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js", // Entry for homepage.html
    createproject: "./src/create_project.js", // Entry for create_project.html
    addtask: "./src/add_task.js",
    viewtask: "./src/view_task.js"
  },
  output: {
    filename: "[name].bundle.js", // Output files for each entry (index.bundle.js, createproject.bundle.js)
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/homepage.html", "./src/create_project.html"], // Corrected watched files
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", // Output file for homepage
      template: "./src/homepage.html", // Template file
      chunks: ["index"], // Include only the "index" entry
    }),
    new HtmlWebpackPlugin({
      filename: "create_project.html", // Output file for create_project
      template: "./src/create_project.html", // Template file
      chunks: ["createproject"], // Include only the "createproject" entry
    }),
    new HtmlWebpackPlugin({
      filename: "add_task.html", // Output file for create_project
      template: "./src/add_task.html", // Template file
      chunks: ["addtask"], // Include only the "createproject" entry
    }),
    new HtmlWebpackPlugin({
      filename: "view_task.html", // Output file for create_project
      template: "./src/view_task.html", // Template file
      chunks: ["viewtask"], // Include only the "createproject" entry
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // Process CSS files
      },
      {
        test: /\.html$/i,
        loader: "html-loader", // Process HTML files
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource", // Handle image assets
      },
    ],
  },
};