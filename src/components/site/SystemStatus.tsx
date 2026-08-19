import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getSystemStatus } from "@/lib/submissions.functions";

export function useSystemStatus() {
  const fetchStatus = useServerFn(getSystemStatus);
  return useQuery({
    queryKey: ["system-status"],
    queryFn: () => fetchStatus(),
    refetchInterval: 60_000,
    staleTime: 30_000,
  });
}

export function StatusPill() {
  const { data, isError } = useSystemStatus();
  const ok = data ? data.operational : !isError;

  return (
    <span className="flex items-center gap-2 border border-gridline bg-card px-3 py-1.5">
      <span className={ok ? "pulse-dot" : "pulse-dot pulse-dot-alert"} />
      <span
        className={`font-mono text-[9px] tracking-[0.18em] uppercase ${
          ok ? "text-moss" : "text-terracotta"
        }`}
      >
        {data
          ? ok
            ? `Swiss DC Active (Geneva) — ${data.latencyMs} ms`
            : "Degraded — Control Plane Unreachable"
          : "Swiss DC Active (Geneva) — Probing…"}
      </span>
    </span>
  );
}

export function StatusChannel({ className }: { className?: string }) {
  const { data, isError } = useSystemStatus();
  const ok = data ? data.operational : !isError;

  const rows: [string, string][] = [
    ["Control plane", ok ? "Operational" : "Degraded"],
    ["Round-trip latency", data ? `${data.latencyMs} ms` : "—"],
    ["Region", data?.region ?? "Genève — CH (Tier 3+)"],
    [
      "Laatste check",
      data ? new Date(data.checkedAt).toLocaleTimeString("nl-BE", { hour12: false }) : "—",
    ],
  ];

  return (
    <div className={className}>
      <div className="flex items-center gap-2.5">
        <span className={ok ? "pulse-dot" : "pulse-dot pulse-dot-alert"} />
        <span className="label-mono">System Status (Live)</span>
      </div>
      <dl className="mt-4 divide-y divide-gridline border-y border-gridline">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4 py-2.5">
            <dt className="label-mono">{k}</dt>
            <dd className="font-mono text-[10px] tracking-[0.12em] text-ebony uppercase">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
