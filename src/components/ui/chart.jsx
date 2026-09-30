// "use client";
// import * as React from "react";
// import * as RechartsPrimitive from "recharts";

// import { cn } from "@/lib/utils";

// // Format: { THEME_NAME: CSS_SELECTOR }
// const THEMES = {
//   light: "",
//   dark: ".dark",
// };

// const ChartContext = React.createContext(null);

// function useChart() {
//   const context = React.useContext(ChartContext);

//   if (!context) {
//     throw new Error("useChart must be used within a <ChartContainer />");
//   }

//   return context;
// }

// const ChartContainer = React.forwardRef(
//   ({ id, className, children, config, ...props }, ref) => {
//     const uniqueId = React.useId();
//     const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

//     return (
//       <ChartContext.Provider value={{ config }}>
//         <div
//           data-chart={chartId}
//           ref={ref}
//           className={cn(
//             "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
//             className,
//           )}
//           {...props}
//         >
//           <ChartStyle id={chartId} config={config} />
//           <RechartsPrimitive.ResponsiveContainer>
//             {children}
//           </RechartsPrimitive.ResponsiveContainer>
//         </div>
//       </ChartContext.Provider>
//     );
//   },
// );
// ChartContainer.displayName = "Chart";

// const ChartStyle = ({ id, config }) => {
//   const colorConfig = Object.entries(config).filter(
//     ([, config]) => config.theme || config.color,
//   );

//   if (!colorConfig.length) {
//     return null;
//   }

//   return (
//     <style
//       dangerouslySetInnerHTML={{
//         __html: Object.entries(THEMES)
//           .map(
//             ([theme, prefix]) => `
// ${prefix} [data-chart=${id}] {
// ${colorConfig
//   .map(([key, itemConfig]) => {
//     const color = itemConfig.theme?.[theme] || itemConfig.color;
//     return color ? `  --color-${key}: ${color};` : null;
//   })
//   .join("\n")}
// }
// `,
//           )
//           .join("\n"),
//       }}
//     />
//   );
// };

// const ChartTooltip = RechartsPrimitive.Tooltip;

// const ChartTooltipContent = React.forwardRef(
//   (
//     {
//       active,
//       payload,
//       className,
//       indicator = "dot",
//       hideLabel = false,
//       hideIndicator = false,
//       label,
//       labelFormatter,
//       labelClassName,
//       formatter,
//       color,
//       nameKey,
//       labelKey,
//     },
//     ref,
//   ) => {
//     const { config } = useChart();

//     const tooltipLabel = React.useMemo(() => {
//       if (hideLabel || !payload?.length) {
//         return null;
//       }

//       const [item] = payload;
//       const key = `${labelKey || item.dataKey || item.name || "value"}`;
//       const itemConfig = getPayloadConfigFromPayload(config, item, key);
//       const value =
//         !labelKey && typeof label === "string"
//           ? config[label]?.label || label
//           : itemConfig?.label;

//       if (labelFormatter) {
//         return (
//           <div className={cn("font-medium", labelClassName)}>
//             {labelFormatter(value, payload)}
//           </div>
//         );
//       }

//       if (!value) {
//         return null;
//       }

//       return <div className={cn("font-medium", labelClassName)}>{value}</div>;
//     }, [
//       label,
//       labelFormatter,
//       payload,
//       hideLabel,
//       labelClassName,
//       config,
//       labelKey,
//     ]);

//     if (!active || !payload?.length) {
//       return null;
//     }

//     const nestLabel = payload.length === 1 && indicator !== "dot";

//     return (
//       <div
//         ref={ref}
//         className={cn(
//           "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
//           className,
//         )}
//       >
//         {!nestLabel ? tooltipLabel : null}
//         <div className="grid gap-1.5">
//           {payload.map((item, index) => {
//             const key = `${nameKey || item.name || item.dataKey || "value"}`;
//             const itemConfig = getPayloadConfigFromPayload(config, item, key);
//             const indicatorColor = color || item.payload.fill || item.color;

//             return (
//               <div
//                 key={item.dataKey}
//                 className={cn(
//                   "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
//                   indicator === "dot" && "items-center",
//                 )}
//               >
//                 {formatter && item?.value !== undefined && item.name ? (
//                   formatter(item.value, item.name, item, index, item.payload)
//                 ) : (
//                   <>
//                     {itemConfig?.icon ? (
//                       <itemConfig.icon />
//                     ) : (
//                       !hideIndicator && (
//                         <div
//                           className={cn(
//                             "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
//                             {
//                               "h-2.5 w-2.5": indicator === "dot",
//                               "w-1": indicator === "line",
//                               "w-0 border-[1.5px] border-dashed bg-transparent":
//                                 indicator === "dashed",
//                               "my-0.5": nestLabel && indicator === "dashed",
//                             },
//                           )}
//                           style={{
//                             "--color-bg": indicatorColor,
//                             "--color-border": indicatorColor,
//                           }}
//                         />
//                       )
//                     )}
//                     <div
//                       className={cn(
//                         "flex flex-1 justify-between leading-none",
//                         nestLabel ? "items-end" : "items-center",
//                       )}
//                     >
//                       <div className="grid gap-1.5">
//                         {nestLabel ? tooltipLabel : null}
//                         <span className="text-muted-foreground">
//                           {itemConfig?.label || item.name}
//                         </span>
//                       </div>
//                       {item.value && (
//                         <span className="font-mono font-medium tabular-nums text-foreground">
//                           {item.value.toLocaleString()}
//                         </span>
//                       )}
//                     </div>
//                   </>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   },
// );
// ChartTooltipContent.displayName = "ChartTooltip";

// const ChartLegend = RechartsPrimitive.Legend;

// const ChartLegendContent = React.forwardRef(
//   (
//     { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
//     ref,
//   ) => {
//     const { config } = useChart();

//     if (!payload?.length) {
//       return null;
//     }

//     return (
//       <div
//         ref={ref}
//         className={cn(
//           "flex items-center justify-center gap-4",
//           verticalAlign === "top" ? "pb-3" : "pt-3",
//           className,
//         )}
//       >
//         {payload.map((item) => {
//           const key = `${nameKey || item.dataKey || "value"}`;
//           const itemConfig = getPayloadConfigFromPayload(config, item, key);

//           return (
//             <div
//               key={item.value}
//               className={cn(
//                 "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground",
//               )}
//             >
//               {itemConfig?.icon && !hideIcon ? (
//                 <itemConfig.icon />
//               ) : (
//                 <div
//                   className="h-2 w-2 shrink-0 rounded-[2px]"
//                   style={{
//                     backgroundColor: item.color,
//                   }}
//                 />
//               )}
//               {itemConfig?.label}
//             </div>
//           );
//         })}
//       </div>
//     );
//   },
// );
// ChartLegendContent.displayName = "ChartLegend";

// // Helper to extract item config from a payload.
// function getPayloadConfigFromPayload(config, payload, key) {
//   if (typeof payload !== "object" || payload === null) {
//     return undefined;
//   }

//   const payloadPayload =
//     "payload" in payload &&
//     typeof payload.payload === "object" &&
//     payload.payload !== null
//       ? payload.payload
//       : undefined;

//   let configLabelKey = key;

//   if (key in payload && typeof payload[key] === "string") {
//     configLabelKey = payload[key];
//   } else if (
//     payloadPayload &&
//     key in payloadPayload &&
//     typeof payloadPayload[key] === "string"
//   ) {
//     configLabelKey = payloadPayload[key];
//   }

//   return configLabelKey in config ? config[configLabelKey] : config[key];
// }

// export {
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
//   ChartLegend,
//   ChartLegendContent,
//   ChartStyle,
// };

"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = {
  light: "",
  dark: ".dark",
};

const ChartContext = React.createContext(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

const ChartContainer = React.forwardRef(
  ({ id, className, children, config, ...props }, ref) => {
    const uniqueId = React.useId();

    const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

    return (
      <ChartContext.Provider value={{ config }}>
        <div
          data-chart={chartId}
          ref={ref}
          className={cn(
            [
              "group/chart",
              "relative flex aspect-video w-full",
              "justify-center",
              "overflow-hidden",
              "rounded-3xl",
              "border border-[#C6577B]/10",
              "bg-white/35",
              "p-4 sm:p-5",
              "text-xs",
              "backdrop-blur-xl",
              "shadow-[0_20px_60px_-25px_rgba(122,46,68,0.25)]",

              // Recharts
              "[&_.recharts-cartesian-axis-tick_text]:fill-[#9d7b85]",
              "[&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-[#C6577B]/10",
              "[&_.recharts-curve.recharts-tooltip-cursor]:stroke-[#C6577B]/20",
              "[&_.recharts-dot[stroke='#fff']]:stroke-transparent",
              "[&_.recharts-layer]:outline-none",
              "[&_.recharts-polar-grid_[stroke='#ccc']]:stroke-[#C6577B]/10",
              "[&_.recharts-radial-bar-background-sector]:fill-[#f5dfe6]",
              "[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-[#C6577B]/5",
              "[&_.recharts-reference-line_[stroke='#ccc']]:stroke-[#C6577B]/20",
              "[&_.recharts-sector[stroke='#fff']]:stroke-transparent",
              "[&_.recharts-sector]:outline-none",
              "[&_.recharts-surface]:outline-none",
            ].join(" "),
            className,
          )}
          {...props}
        >
          {/* Ambient glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute -right-20 -top-20
              h-48 w-48
              rounded-full
              bg-[#C6577B]/8
              blur-3xl
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute -bottom-24 -left-20
              h-48 w-48
              rounded-full
              bg-[#7A2E44]/5
              blur-3xl
            "
          />

          {/* Glass highlight */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute inset-x-10 top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#C6577B]/30
              to-transparent
            "
          />

          <ChartStyle id={chartId} config={config} />

          <RechartsPrimitive.ResponsiveContainer>
            {children}
          </RechartsPrimitive.ResponsiveContainer>
        </div>
      </ChartContext.Provider>
    );
  },
);

ChartContainer.displayName = "Chart";

const ChartStyle = ({ id, config }) => {
  if (!config) {
    return null;
  }

  const colorConfig = Object.entries(config).filter(
    ([, itemConfig]) => itemConfig?.theme || itemConfig?.color,
  );

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart="${id}"] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme] || itemConfig.color;

    return color ? `  --color-${key}: ${color};` : null;
  })
  .filter(Boolean)
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref,
  ) => {
    const { config } = useChart();

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }

      const [item] = payload;

      const key = `${labelKey || item.dataKey || item.name || "value"}`;

      const itemConfig = getPayloadConfigFromPayload(config, item, key);

      const value =
        !labelKey && typeof label === "string"
          ? config?.[label]?.label || label
          : itemConfig?.label;

      if (labelFormatter) {
        return (
          <div className={cn("font-semibold text-[#7A2E44]", labelClassName)}>
            {labelFormatter(value, payload)}
          </div>
        );
      }

      if (!value) {
        return null;
      }

      return (
        <div className={cn("font-semibold text-[#7A2E44]", labelClassName)}>
          {value}
        </div>
      );
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey,
    ]);

    if (!active || !payload?.length) {
      return null;
    }

    const nestLabel = payload.length === 1 && indicator !== "dot";

    return (
      <div
        ref={ref}
        className={cn(
          [
            "grid min-w-[9rem]",
            "items-start gap-2",
            "rounded-2xl",
            "border border-[#C6577B]/15",
            "bg-white/75",
            "px-3 py-2.5",
            "text-xs",
            "text-[#6b3a49]",
            "backdrop-blur-2xl",
            "shadow-[0_15px_45px_-15px_rgba(122,46,68,0.35)]",
          ].join(" "),
          className,
        )}
      >
        {!nestLabel ? tooltipLabel : null}

        <div className="grid gap-2">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`;

            const itemConfig = getPayloadConfigFromPayload(config, item, key);

            const indicatorColor =
              color || item.payload?.fill || item.color || "#C6577B";

            return (
              <div
                key={`${item.dataKey}-${index}`}
                className={cn(
                  ["flex w-full", "flex-wrap items-stretch", "gap-2"].join(" "),
                  indicator === "dot" && "items-center",
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            "shrink-0",
                            "border-[--color-border]",
                            "bg-[--color-bg]",
                            {
                              "h-2.5 w-2.5 rounded-full": indicator === "dot",

                              "h-3 w-1 rounded-full": indicator === "line",

                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed",

                              "my-0.5": nestLabel && indicator === "dashed",
                            },
                          )}
                          style={{
                            "--color-bg": indicatorColor,
                            "--color-border": indicatorColor,
                          }}
                        />
                      )
                    )}

                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center",
                      )}
                    >
                      <div className="grid gap-1">
                        {nestLabel ? tooltipLabel : null}

                        <span className="text-[#8d6874]">
                          {itemConfig?.label || item.name}
                        </span>
                      </div>

                      {item.value !== undefined && (
                        <span className="ml-4 font-mono font-semibold tabular-nums text-[#4a2732]">
                          {Number(item.value).toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);

ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef(
  (
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
    ref,
  ) => {
    const { config } = useChart();

    if (!payload?.length) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn(
          [
            "flex flex-wrap",
            "items-center justify-center",
            "gap-x-5 gap-y-2",
            "text-[#8d6874]",
          ].join(" "),
          verticalAlign === "top" ? "pb-3" : "pt-4",
          className,
        )}
      >
        {payload.map((item, index) => {
          const key = `${nameKey || item.dataKey || "value"}`;

          const itemConfig = getPayloadConfigFromPayload(config, item, key);

          return (
            <div
              key={`${item.value}-${index}`}
              className="
                    flex items-center gap-2
                    rounded-full
                    border border-[#C6577B]/10
                    bg-white/35
                    px-2.5 py-1
                    backdrop-blur-md
                  "
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="
                        h-2 w-2
                        shrink-0
                        rounded-full
                      "
                  style={{
                    backgroundColor: item.color || "#C6577B",
                  }}
                />
              )}

              <span>{itemConfig?.label || item.value}</span>
            </div>
          );
        })}
      </div>
    );
  },
);

ChartLegendContent.displayName = "ChartLegend";

// Helper to extract item config
// from a Recharts payload.
function getPayloadConfigFromPayload(config, payload, key) {
  if (!config || typeof payload !== "object" || payload === null) {
    return undefined;
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey = key;

  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key] === "string"
  ) {
    configLabelKey = payloadPayload[key];
  }

  return config[configLabelKey] || config[key];
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};