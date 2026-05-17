import { useState, useRef, useCallback } from 'react'

const RED = '#E8192C'
const DARK = '#0D0D0D'
const DG = '#1A1A1A'
const MG = '#2A2A2A'
const LG = '#3A3A3A'
const TM = '#888888'
const TL = '#BBBBBB'
const WH = '#FFFFFF'

const MOCK_MEETING = `## OUTCOME SNAPSHOT
— Calvin reframed the studio's role: the intervention must change Baloon's communication structure, not just deliver outputs to startups
— Decision made to approach Mango collaboratively (build the solution with her, not present it to her) to avoid triggering defensive review
— Hobbes acknowledged he had been framing the problem from the wrong layer — positioning for startups rather than restructuring Baloon's incentive architecture
— Agreement that the next email to startups is on the studio, not Baloon — this is the first real leverage point
— The pipeline being dry was named openly as the real urgency driver behind wanting this sprint to work

## THIS WEEK'S GOAL
Design the mandatory/optional incentive framework and secure a working session with Mango before she leaves again.

## TOP PRIORITIES
1. Redesign Baloon's startup communication structure (mandatory vs optional framing with accountability)
2. Schedule working session with Mango — collaborative build, not a pitch
3. Draft the studio's first direct email to startups
4. Analyse the existing startup profiles Hobbes has already scanned
5. Define what the studio will be held accountable for delivering in this sprint

## NEXT 7 DAYS - ACTIONS
ACTION #1 | Owner: Hobbes | Deliverable: One-page framework separating mandatory deliverables from optional value-add with explicit pricing | Done-when: Calvin has reviewed it
ACTION #2 | Owner: Hobbes | Deliverable: Calendar invite sent to Mango for in-person working session | Done-when: Mango has confirmed attendance
ACTION #3 | Owner: Hobbes | Deliverable: Draft of studio's first email to startups | Done-when: Calvin has approved the draft
ACTION #4 | Owner: Hobbes | Deliverable: Structured summary of startup profiles shared with Calvin | Done-when: Calvin has received and read it
ACTION #5 | Owner: Both | Deliverable: Agreed list of what the studio will and will not be accountable for | Done-when: Both parties have signed off verbally

## DECISION GATES
GATE #1: Does the studio contact startups this week or wait for Mango? | Owner: Calvin | Decide-by: Tomorrow
GATE #2: Which location for the Mango working session? | Owner: Hobbes | Decide-by: Today

## RISK REGISTER
RISK #1: Baloon reverts to existing communication patterns after the working session | Cause: Momentum — institutional habit stronger than a single intervention
RISK #2: Mango receives the framework as a critique rather than co-creation | Cause: Framing failure — presenting instead of building together
RISK #3: Studio gets held accountable for startup outcomes it cannot control | Cause: Constraint — studio was not part of the selection process

## UNKNOWNS
UNKNOWN #1: Whether the final startup slot will be filled with a weak candidate | Type: Open dependency on Baloon's selection process
UNKNOWN #2: What Bee has already communicated to startups on the studio's behalf | Type: Missing evidence

## METHODS
METHOD: Never present a solution to a stakeholder who hasn't co-built it — they will wear the critical eye, not the ownership hat
METHOD: Separate mandatory deliverables (with accountability) from optional value-add (with visible pricing)
METHOD: Setting the stage correctly is a precondition for impact, not a soft concern

Bottleneck this week: Securing the Mango working session before she travels again`

const MOCK_DIAGNOSIS = `## MECHANISM 1 - CONTEXT-FIRST DIAGNOSIS

Why Now
What is visible: EU Single-Use Plastics Directive active, Dutch dairy surplus regulations tightening, ESG pressure on buyers increasing. Five years of R&D completed.
What it suggests: The regulatory window is real and creates genuine buyer openness that did not exist three years ago.
What is missing: No evidence that target buyers are actively searching for alternatives right now vs. being theoretically open.
Confidence: medium

Founder
What is visible: Engineer and designer background, 5 years building across two countries, personal lived connection to the problem, solo active founder.
What it suggests: Deep material knowledge and genuine conviction. The origin story is credible and differentiating.
What is missing: Commercial track record. The founder has not yet closed a repeating revenue relationship.
Confidence: medium

Validation and Evidence
What is visible: Lab data on Dungwood (30MPa flexural strength). Biodegradation tested. 135K EUR in grants. Four pilot engagements across wildlife, municipality, architecture, automotive.
What it suggests: Technical feasibility is established. Institutional credibility from grant bodies is real.
What is missing: Every pilot ended without repeat purchase or scaling commitment. The pattern of interest-without-conversion is the most important signal in the material.
Confidence: low on commercial readiness

## MECHANISM 2 - CLAIM INTEGRITY

Claim: Dungwood flexural strength is at par with pinewood
Type: Bounded
Supported: Lab data exists (30MPa vs 40MPa pinewood)
Depends on: Lab conditions translating to real manufacturing environments
Cannot yet support: Buyer specification approval or structural certification

Claim: The regulatory environment creates urgency for bio-based alternatives
Type: Directional
Supported: EU directives named and active
Depends on: Buyers actually being procurement-ready, not just policy-aware
Cannot yet support: Any specific buyer's decision to switch materials this year

Claim: Mercedes, BMW, Jaguar Land Rover represent commercial traction
Type: Aspirational — these were exploratory CMF conversations without KPIs
Supported: Meetings occurred
Cannot yet support: Pipeline valuation or investor traction claims

## MECHANISM 3 - PRACTICAL ADDRESSABILITY

Is the user group real in practical form?
Theoretically broad (packaging, furniture, construction, automotive). In practice each sector requires different certifications, different sample formats, different procurement cycles. The usable segment right now is likely one sector, one geography, one buyer profile.

Is the buyer reachable?
Past pilots show buyers are reachable for conversations. The gap is converting conversations to commitments. The pattern has repeated four times.

What is narrower in practice?
The 17-country OHADA claim is structurally correct but practically irrelevant at this stage. The real addressable market is 2-3 industries in 1-2 geographies where the founder has existing warm relationships and the certification pathway is shortest.

## MECHANISM 4 - STAGE-APPROPRIATE JUDGMENT

Must be known now: Which one industry and one buyer profile is the sprint targeting? Without this the 25K EUR budget will be spread too thin.

Important soon but not blocking: Certification pathway and timeline for the chosen industry.

Where material sounds more mature than it proves: The automotive leads listed alongside paying clients. These were exploratory conversations without KPIs.

Where it is early but coherent: The decision to defer certification until product-market fit is identified is correct. The sprint goal of one LOI or pilot commitment is the right unit of validation.

## SYNTHESIS

Strongest areas: Technical foundation is real. Founder conviction and origin story are credible. Regulatory timing is genuinely favourable. Sprint goal is correctly defined.

Biggest risks: The pattern of interest-without-conversion has repeated four times across four different industries. This is the central unresolved question.

Communication vs structural: Automotive leads presented at same weight as paying clients is a communication issue. The interest-without-conversion pattern is potentially structural.

What most affects readiness: Whether the studio can help the founder commit to one specific buyer profile before the sprint begins.`

const MOCK_TRUTH = `## VENTURE REALITY
Dungse Labs is a technically validated but commercially unproven biomaterials venture that has demonstrated the ability to generate interest across multiple industries without yet converting that interest into a repeating commercial relationship.

## WHAT IS GENUINELY STRONG
— Five years of R&D with lab-verified material performance (Dungwood at 30MPa, biodegradation confirmed) — this is not hypothetical
— 135K EUR in competitive grants from credible institutions including Wageningen University and Province of Zuid-Holland
— Founder's dual-context origin story (Indian indigenous knowledge + Dutch dairy waste problem) is rare, credible, and directly relevant — not a constructed narrative
— Regulatory timing is genuinely favourable — EU Single-Use Plastics Directive and Dutch dairy emissions regulations create real buyer openness that did not exist three years ago

## MAIN BREAKPOINTS
— Four pilot engagements across four industries, zero repeat purchases or scaling commitments — this pattern is the most important unresolved signal and the sprint must explain it, not move past it
— No dedicated commercial co-founder — the founder is an engineer running sales, go-to-market, and technical development simultaneously
— The certification gap is not a later-stage concern — without at least one industry-specific certification pathway underway, buyers who reach procurement cannot proceed
— The sprint budget of 25K EUR is insufficient if split across 2-3 industries — it is sufficient if concentrated on one

## CLAIMS NOT YET STRONG ENOUGH
— Mercedes, BMW, Jaguar Land Rover listed as traction — these were exploratory CMF conversations without KPIs, not commercial leads
— The 17-country OHADA market claim is structurally correct but practically irrelevant at this stage
— "The regulatory environment creates urgency" — openness is not urgency; no evidence any specific buyer has a procurement decision gated on bio-based materials this year

## COMMUNICATION VS STRUCTURAL
Communication issues: Automotive conversations presented at same weight as paying clients. Market size framed as 17 countries when the real addressable segment is much narrower.
Structural issues: Interest-without-conversion pattern across four engagements — root cause not yet identified. Absence of commercial co-founder. No certification pathway initiated for any priority industry.

## WHAT MUST BE ANSWERED NOW
1. What is the specific buyer profile, industry, and geography the sprint will target — not a list of options, a single committed choice?
2. Why have four previous pilot engagements not converted — is that a messaging, pricing, certification, or product-market fit problem?
3. Who is the commercial counterpart to the founder, and is there a co-founder or BD hire plan before the next funding round?

## MOST APPROPRIATE NEXT MOVE
Commit to one industry and one buyer profile before the sprint begins, use the 25K EUR to put real material samples in front of 8-10 serious buyers in that segment, and treat securing one LOI or pilot agreement as the binary success condition.`

function readAsBase64(file) {
  return new Promise(resolve => {
    const r = new FileReader()
    r.onload = e => resolve(e.target.result.split(',')[1])
    r.readAsDataURL(file)
  })
}

function parseMarkdown(text) {
  if (!text) return null
  return text.split('\n').map((line, i) => {
    if (line.startsWith('## ')) return (
      <div key={i} style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.12em', color: RED, textTransform: 'uppercase', marginTop: '22px', marginBottom: '7px', fontFamily: "'Space Mono', monospace", borderBottom: `1px solid ${RED}44`, paddingBottom: '3px' }}>
        {line.replace('## ', '')}
      </div>
    )
    if (line.match(/^(ACTION|GATE|RISK|UNKNOWN|METHOD|Bottleneck)/)) return (
      <div key={i} style={{ background: MG, borderLeft: `3px solid ${RED}`, padding: '8px 12px', marginBottom: '6px', borderRadius: '0 3px 3px 0', fontSize: '11px', color: TL, fontFamily: "'Space Mono', monospace", lineHeight: '1.7' }}>
        {line}
      </div>
    )
    if (line.startsWith('— ') || line.startsWith('- ') || line.startsWith('• ')) return (
      <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '5px', fontSize: '13px', color: TL, lineHeight: '1.65' }}>
        <span style={{ color: RED, flexShrink: 0 }}>—</span>
        <span>{line.replace(/^[—\-•]\s/, '')}</span>
      </div>
    )
    if (line.trim()) return <p key={i} style={{ fontSize: '13px', color: TL, lineHeight: '1.7', marginBottom: '5px' }}>{line}</p>
    return null
  })
}

function DropZone({ zoneKey, label, sub, active, file, onFile }) {
  const inputRef = useRef()
  const [dragging, setDragging] = useState(false)

  const handleFile = useCallback(async (f) => {
    if (!f || f.type !== 'application/pdf') return
    onFile(f)
  }, [onFile])

  const border = file ? RED : dragging ? RED : active ? LG : MG
  const bg = file ? `${RED}18` : dragging ? `${RED}10` : DG

  return (
    <div
      onClick={() => active && inputRef.current?.click()}
      onDragOver={e => { e.preventDefault(); if (active) setDragging(true) }}
      onDragLeave={() => setDragging(false)}
      onDrop={e => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]) }}
      style={{ border: `2px dashed ${border}`, borderRadius: '3px', padding: '36px 24px', textAlign: 'center', cursor: active ? 'pointer' : 'default', background: bg, transition: 'all 0.2s', opacity: active ? 1 : 0.4 }}
    >
      <input ref={inputRef} type="file" accept=".pdf" style={{ display: 'none' }} onChange={e => handleFile(e.target.files[0])} />
      {file ? (
        <>
          <div style={{ fontSize: '22px', marginBottom: '6px', color: RED }}>✓</div>
          <div style={{ fontSize: '12px', fontWeight: '700', color: WH, fontFamily: "'Space Mono', monospace" }}>{file.name}</div>
          <div style={{ fontSize: '11px', color: TM, marginTop: '4px' }}>{(file.size / 1024).toFixed(0)} KB</div>
        </>
      ) : (
        <>
          <div style={{ fontSize: '28px', marginBottom: '10px', color: LG }}>{active ? '↓' : '○'}</div>
          <div style={{ fontSize: '13px', fontWeight: '700', color: WH, fontFamily: "'Space Mono', monospace", marginBottom: '5px' }}>{label}</div>
          <div style={{ fontSize: '11px', color: TM }}>{active ? sub : 'Complete step 1 first'}</div>
        </>
      )}
    </div>
  )
}

function ProcessingStep({ label, status }) {
  const color = status === 'done' ? RED : status === 'active' ? WH : LG
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 0', borderBottom: `1px solid ${MG}` }}>
      <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: `2px solid ${color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color, flexShrink: 0, animation: status === 'active' ? 'pulse 1.4s infinite' : 'none' }}>
        {status === 'done' ? '✓' : status === 'active' ? '◉' : '○'}
      </div>
      <div>
        <div style={{ fontSize: '12px', fontWeight: '700', color, fontFamily: "'Space Mono', monospace" }}>{label}</div>
        {status === 'active' && <div style={{ fontSize: '11px', color: TM, marginTop: '2px' }}>Running...</div>}
      </div>
    </div>
  )
}

export default function App() {
  const [screen, setScreen] = useState('upload')
  const [transcriptFile, setTranscriptFile] = useState(null)
  const [startupFile, setStartupFile] = useState(null)
  const [steps, setSteps] = useState({ meeting: 'wait', diagnosis: 'wait', truth: 'wait' })
  const [results, setResults] = useState({ meeting: MOCK_MEETING, diagnosis: MOCK_DIAGNOSIS, truth: MOCK_TRUTH })
  const [activeTab, setActiveTab] = useState('truth')

  const reset = () => {
    setScreen('upload')
    setTranscriptFile(null)
    setStartupFile(null)
    setSteps({ meeting: 'wait', diagnosis: 'wait', truth: 'wait' })
    setActiveTab('truth')
  }

  const runPipeline = async () => {
    setScreen('processing')
    const delay = ms => new Promise(r => setTimeout(r, ms))

    setSteps({ meeting: 'active', diagnosis: 'wait', truth: 'wait' })
    await delay(2200)
    setSteps({ meeting: 'done', diagnosis: 'active', truth: 'wait' })
    await delay(2800)
    setSteps({ meeting: 'done', diagnosis: 'done', truth: 'active' })
    await delay(2000)
    setSteps({ meeting: 'done', diagnosis: 'done', truth: 'done' })
    setScreen('results')
  }

  const canRun = transcriptFile && startupFile

  return (
    <div style={{ minHeight: '100vh', background: DARK, color: WH, fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      {/* Header */}
      <div style={{ borderBottom: `1px solid ${MG}`, padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '52px', background: DARK, position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: RED, color: WH, fontFamily: "'Space Mono', monospace", fontWeight: '700', fontSize: '12px', padding: '4px 10px' }}>*WIP</div>
          <div style={{ fontSize: '11px', color: TM, fontFamily: "'Space Mono', monospace", letterSpacing: '0.1em' }}>SPRINT INTELLIGENCE</div>
        </div>
        {screen !== 'upload' && (
          <button onClick={reset} style={{ background: 'none', border: `1px solid ${LG}`, color: TM, fontSize: '10px', padding: '6px 14px', cursor: 'pointer', fontFamily: "'Space Mono', monospace", borderRadius: '2px' }}>
            NEW SPRINT
          </button>
        )}
      </div>

      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '40px 32px' }}>

        {/* UPLOAD */}
        {screen === 'upload' && (
          <div style={{ animation: 'fadeIn 0.35s ease' }}>
            <div style={{ fontSize: '10px', fontFamily: "'Space Mono', monospace", color: RED, letterSpacing: '0.15em', marginBottom: '10px' }}>/ SPRINT ANALYSIS</div>
            <h1 style={{ fontSize: '30px', fontWeight: '700', lineHeight: '1.15', letterSpacing: '-0.02em', marginBottom: '14px' }}>
              Upload sprint materials.<br />
              <span style={{ color: RED }}>Get shared truth.</span>
            </h1>
            <p style={{ fontSize: '13px', color: TM, lineHeight: '1.75', maxWidth: '440px', marginBottom: '36px' }}>
              Drop the founder meeting transcript, then the startup documents. Three AI stages run in sequence and synthesise both into a single shared truth document.
            </p>

            <div style={{ fontSize: '10px', fontFamily: "'Space Mono', monospace", color: TM, letterSpacing: '0.12em', marginBottom: '8px' }}>STEP 1 — MEETING TRANSCRIPT</div>
            <DropZone zoneKey="transcript" label="Drop meeting transcript here" sub="PDF — founder call, sprint debrief, or partner conversation" active={true} file={transcriptFile} onFile={f => setTranscriptFile(f)} />

            <div style={{ height: '14px' }} />

            <div style={{ fontSize: '10px', fontFamily: "'Space Mono', monospace", color: transcriptFile ? TM : LG, letterSpacing: '0.12em', marginBottom: '8px' }}>STEP 2 — STARTUP DOCUMENTS</div>
            <DropZone zoneKey="startup" label="Drop startup submission here" sub="PDF — sprint document, pitch deck, or founder brief" active={!!transcriptFile} file={startupFile} onFile={f => setStartupFile(f)} />

            <button
              onClick={canRun ? runPipeline : undefined}
              disabled={!canRun}
              style={{ width: '100%', padding: '16px', background: canRun ? RED : MG, border: 'none', color: WH, fontSize: '12px', fontWeight: '700', fontFamily: "'Space Mono', monospace", letterSpacing: '0.1em', cursor: canRun ? 'pointer' : 'not-allowed', borderRadius: '2px', marginTop: '20px' }}
            >
              {canRun ? 'RUN SPRINT ANALYSIS →' : 'UPLOAD BOTH FILES TO CONTINUE'}
            </button>

            <div style={{ marginTop: '14px', padding: '10px 14px', border: `1px solid ${LG}`, borderRadius: '3px', fontSize: '10px', color: TM, fontFamily: "'Space Mono', monospace", lineHeight: '1.7' }}>
              PROTOTYPE NOTE: This demo uses pre-generated outputs from a real Dungse Labs sprint session. Live AI synthesis connects via Vercel serverless proxy in the production version.
            </div>
          </div>
        )}

        {/* PROCESSING */}
        {screen === 'processing' && (
          <div style={{ animation: 'fadeIn 0.35s ease' }}>
            <div style={{ fontSize: '10px', fontFamily: "'Space Mono', monospace", color: RED, letterSpacing: '0.15em', marginBottom: '10px' }}>/ RUNNING ANALYSIS</div>
            <h1 style={{ fontSize: '28px', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: '32px' }}>Processing sprint materials</h1>
            <div style={{ background: DG, borderRadius: '3px', padding: '8px 24px', marginBottom: '28px' }}>
              <ProcessingStep label="Extracting meeting insights" status={steps.meeting} />
              <ProcessingStep label="Diagnosing startup venture" status={steps.diagnosis} />
              <ProcessingStep label="Generating shared truth" status={steps.truth} />
            </div>
            <div style={{ background: DG, borderRadius: '3px', padding: '14px 18px', fontSize: '11px', color: TM, lineHeight: '1.75', fontFamily: "'Space Mono', monospace" }}>
              Each stage feeds the next. Meeting extract and venture diagnosis are synthesised into the shared truth document. Human review required before external sharing.
            </div>
          </div>
        )}

        {/* RESULTS */}
        {screen === 'results' && (
          <div style={{ animation: 'fadeIn 0.35s ease' }}>
            <div style={{ fontSize: '10px', fontFamily: "'Space Mono', monospace", color: RED, letterSpacing: '0.15em', marginBottom: '10px' }}>/ ANALYSIS COMPLETE</div>
            <h1 style={{ fontSize: '28px', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: '6px' }}>Sprint intelligence ready</h1>
            <p style={{ fontSize: '13px', color: TM, marginBottom: '28px' }}>Shared Truth is the primary output. Intermediate stages are available for audit and human review.</p>

            <div style={{ background: DG, borderRadius: '3px', padding: '20px 24px' }}>
              <div style={{ display: 'flex', borderBottom: `1px solid ${MG}`, marginBottom: '20px' }}>
                {[{ key: 'truth', label: 'Shared Truth' }, { key: 'diagnosis', label: 'Venture Diagnosis' }, { key: 'meeting', label: 'Meeting Extract' }].map(({ key, label }) => (
                  <button key={key} onClick={() => setActiveTab(key)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '10px 20px', fontSize: '10px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Space Mono', monospace", color: activeTab === key ? WH : TM, borderBottom: activeTab === key ? `2px solid ${RED}` : '2px solid transparent', marginBottom: '-1px' }}>
                    {label}
                  </button>
                ))}
              </div>
              <div style={{ minHeight: '320px', maxHeight: '520px', overflowY: 'auto', paddingRight: '8px' }}>
                {parseMarkdown(results[activeTab])}
              </div>
            </div>

            <div style={{ marginTop: '12px', padding: '12px 16px', border: `1px solid ${LG}`, borderRadius: '3px', fontSize: '11px', color: TM, fontFamily: "'Space Mono', monospace" }}>
              ! Human review required before sharing Shared Truth externally with founders or investors.
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
