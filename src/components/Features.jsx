import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

// Feature configuration data
// Added stable `id` values to avoid index-based React keys
const features = [
  {
    id: "ai-code-completion",
    title: "AI Code Completion",
    description:
      "Intelligent code suggestions powered by advanced AI that learns from your coding patterns. Get real-time assistance with syntax, logic, and best practices.",
    codeSnippet: `async function handleSubmit() {
  // AI suggests next line
  const data = await fetch("/api/submit")
  // Auto-completed by AI
}`,
    imagePosition: "left",
  },
  {
    id: "automated-testing",
    title: "Automated Testing",
    description:
      "Generate comprehensive test suites automatically. Our AI analyzes your code and creates unit tests, integration tests, and edge case coverage.",
    codeSnippet: `describe("User Authentication", () => {
  // Auto-generated tests
  it("should login successfully", () => {
    // Test implementation
  })
})`,
    imagePosition: "right",
  },
  {
    id: "smart-debugging",
    title: "Smart Debugging",
    description:
      "Identify and fix bugs before they reach production. AI-powered error detection and resolution suggestions help you debug faster.",
    codeSnippet: `// AI suggests fix:
const result = await processData(input)
// Fixed: Added await keyword`,
    imagePosition: "left",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative px-6 py-16 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-5xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Your Complete Development
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Workflow
            </span>
          </h2>
        </div>

        {/* Feature List */}
        <div className="space-y-20 lg:space-y-32">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`flex flex-col items-center gap-12 lg:flex-row ${
                feature.imagePosition === "right"
                  ? "lg:flex-row-reverse"
                  : ""
              }`}
            >
              {/* Code Preview */}
              <div className="w-full flex-1">
                <div className="group relative">
                  {/* Gradient Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 transition-all duration-500" />

                  {/* Glass Container */}
                  <div className="relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-900/50 p-6 backdrop-blur-sm transition-colors duration-300 group-hover:border-blue-600/50">
                    <div className="rounded-lg bg-gray-950 p-4 font-mono text-sm">
                      {/* IDE Header */}
                      <div className="mb-4 flex items-center space-x-2">
                        <div className="flex items-center space-x-2">
                          <div className="h-3 w-3 rounded-full bg-red-500" />
                          <div className="h-3 w-3 rounded-full bg-yellow-500" />
                          <div className="h-3 w-3 rounded-full bg-green-500" />
                        </div>
                        <span className="ml-4 text-sm text-gray-400">
                          {feature.title}
                        </span>
                      </div>

                      {/* Code Block */}
                      <SyntaxHighlighter
                        language="javascript"
                        style={nightOwl}
                        wrapLines
                        customStyle={{
                          margin: 0,
                          background: "transparent",
                          borderRadius: "8px",
                          lineHeight: "1.5",
                        }}
                      >
                        {feature.codeSnippet}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full flex-1">
                <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
                  <h3 className="mb-6 text-4xl font-bold text-white sm:text-3xl lg:text-4xl">
                    {feature.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
