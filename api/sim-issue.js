/** Mock data of telecom SIM related issues */

const simIssues = {
  "SIM-001": {
    issue_id: "SIM-001",
    category: "SIM Detection",
    issue_title: "SIM card not detected",
    customer_symptoms: [
      "Phone shows 'No SIM' or 'SIM not inserted'",
      "No network bars are visible",
      "Customer cannot make calls, send SMS, or use mobile data"
    ],
    likely_causes: [
      "SIM card is not seated correctly",
      "SIM tray or slot is damaged",
      "SIM card is physically damaged",
      "Device software issue"
    ],
    recommended_steps: [
      "Ask the customer to restart the device",
      "Ask the customer to remove and reinsert the SIM card",
      "Ask the customer to clean the SIM gently with a dry cloth",
      "Ask the customer to test the SIM in another compatible device",
      "If the SIM fails in another device, recommend SIM replacement"
    ],
    severity: "High",
    customer_impact: "Complete loss of mobile service",
    escalation_required: true,
    escalation_condition: "Escalate if SIM is not detected in multiple compatible devices or the customer needs urgent service restoration."
  },
  "SIM-002": {
    issue_id: "SIM-002",
    category: "Activation",
    issue_title: "New SIM not activated",
    customer_symptoms: [
      "Customer recently received a new SIM",
      "SIM shows no service",
      "Activation SMS or confirmation has not been received"
    ],
    likely_causes: [
      "Activation request is still pending",
      "Customer identity verification is incomplete",
      "Incorrect SIM number was mapped to the account",
      "Backend provisioning delay"
    ],
    recommended_steps: [
      "Verify customer identity and account status",
      "Confirm the ICCID or SIM serial number",
      "Check whether activation is pending, failed, or completed",
      "Ask customer to restart the device after activation is confirmed",
      "Raise a provisioning ticket if activation failed"
    ],
    severity: "High",
    customer_impact: "Customer cannot use the new connection",
    escalation_required: true,
    escalation_condition: "Escalate if activation is pending beyond the standard SLA or the SIM details do not match the account."
  },
  "SIM-003": {
    issue_id: "SIM-003",
    category: "Network Registration",
    issue_title: "SIM shows no service",
    customer_symptoms: [
      "Device shows 'No Service'",
      "Customer is unable to register on the network",
      "Issue may occur after travel, SIM swap, or device change"
    ],
    likely_causes: [
      "Network outage in the area",
      "SIM provisioning issue",
      "Account is barred or suspended",
      "Device is set to an unsupported network mode"
    ],
    recommended_steps: [
      "Check account status for suspension or barring",
      "Verify network coverage at the customer location",
      "Ask customer to toggle airplane mode off and on",
      "Ask customer to manually select the network",
      "Ask customer to set network mode to automatic or supported mode"
    ],
    severity: "High",
    customer_impact: "Customer cannot access voice, SMS, or data services",
    escalation_required: true,
    escalation_condition: "Escalate if account and coverage are normal but network registration continues to fail."
  },
  "SIM-004": {
    issue_id: "SIM-004",
    category: "SIM Lock",
    issue_title: "SIM PIN or PUK locked",
    customer_symptoms: [
      "Device asks for SIM PIN",
      "Device asks for PUK code",
      "SIM is blocked after multiple incorrect PIN attempts"
    ],
    likely_causes: [
      "Incorrect SIM PIN entered multiple times",
      "Customer forgot SIM PIN",
      "SIM security lock is enabled"
    ],
    recommended_steps: [
      "Verify the customer's identity",
      "Provide the correct PUK code from the customer account system",
      "Guide customer to enter the PUK code carefully",
      "Advise customer not to guess the PUK code",
      "Recommend SIM replacement if PUK attempts are exhausted"
    ],
    severity: "Medium",
    customer_impact: "SIM access is blocked until unlocked",
    escalation_required: false,
    escalation_condition: "Escalate only if the PUK code is unavailable or the account record is inconsistent."
  },
  "SIM-005": {
    issue_id: "SIM-005",
    category: "Mobile Data",
    issue_title: "Mobile data not working on SIM",
    customer_symptoms: [
      "Calls and SMS work but internet does not",
      "Data icon does not appear",
      "Apps fail to connect using mobile data"
    ],
    likely_causes: [
      "Mobile data is disabled on the device",
      "Incorrect APN settings",
      "Data pack is exhausted or inactive",
      "Data service is not provisioned on the SIM"
    ],
    recommended_steps: [
      "Confirm active data plan and available balance",
      "Ask customer to turn mobile data on",
      "Verify APN settings",
      "Ask customer to reset network settings if needed",
      "Refresh data provisioning if account settings are incorrect"
    ],
    severity: "Medium",
    customer_impact: "Customer cannot use internet services over mobile network",
    escalation_required: true,
    escalation_condition: "Escalate if APN, plan, coverage, and device settings are correct but data still fails."
  },
  "SIM-006": {
    issue_id: "SIM-006",
    category: "Voice Services",
    issue_title: "Unable to make outgoing calls",
    customer_symptoms: [
      "Customer cannot place calls",
      "Call fails immediately",
      "Customer hears a barring or insufficient balance message"
    ],
    likely_causes: [
      "Outgoing call barring is active",
      "Account balance or plan validity has expired",
      "Voice service provisioning issue",
      "Temporary network congestion"
    ],
    recommended_steps: [
      "Check plan validity and available balance",
      "Check outgoing call barring status",
      "Ask customer to try a different number",
      "Ask customer to restart the device",
      "Refresh voice service provisioning if required"
    ],
    severity: "High",
    customer_impact: "Customer cannot make voice calls",
    escalation_required: true,
    escalation_condition: "Escalate if balance, validity, and barring status are normal but outgoing calls fail."
  },
  "SIM-007": {
    issue_id: "SIM-007",
    category: "Voice Services",
    issue_title: "Unable to receive incoming calls",
    customer_symptoms: [
      "Callers hear switched off, unreachable, or busy tone",
      "Customer receives missed call alerts later",
      "Incoming calls do not ring on the device"
    ],
    likely_causes: [
      "Call forwarding is enabled",
      "Do Not Disturb or call blocking is active",
      "SIM is not registered correctly on network",
      "Network coverage issue"
    ],
    recommended_steps: [
      "Check whether call forwarding is enabled",
      "Ask customer to disable call blocking or Do Not Disturb",
      "Ask customer to restart the device",
      "Check network registration status",
      "Raise a network ticket if multiple callers face the same issue"
    ],
    severity: "High",
    customer_impact: "Customer misses important incoming calls",
    escalation_required: true,
    escalation_condition: "Escalate if forwarding and device settings are normal but incoming calls continue to fail."
  },
  "SIM-008": {
    issue_id: "SIM-008",
    category: "SMS Services",
    issue_title: "Unable to send SMS",
    customer_symptoms: [
      "SMS fails to send",
      "Customer receives message sending failed error",
      "OTP or bank SMS cannot be sent"
    ],
    likely_causes: [
      "Incorrect SMS center number",
      "Outgoing SMS barring is active",
      "Plan does not include SMS",
      "Temporary SMS platform issue"
    ],
    recommended_steps: [
      "Check SMS balance or plan eligibility",
      "Verify outgoing SMS barring status",
      "Validate SMS center number on the device",
      "Ask customer to restart the device",
      "Raise an SMS platform ticket if multiple messages fail"
    ],
    severity: "Medium",
    customer_impact: "Customer cannot send text messages or service requests by SMS",
    escalation_required: true,
    escalation_condition: "Escalate if plan, barring, and SMS center settings are correct."
  },
  "SIM-009": {
    issue_id: "SIM-009",
    category: "SMS Services",
    issue_title: "Unable to receive SMS or OTP",
    customer_symptoms: [
      "Customer does not receive OTP messages",
      "Normal SMS messages are delayed or missing",
      "Issue started after SIM swap or port-in"
    ],
    likely_causes: [
      "Incoming SMS provisioning delay",
      "Temporary block after SIM swap",
      "Message storage is full",
      "Sender-side delivery issue"
    ],
    recommended_steps: [
      "Check if SMS restrictions apply after SIM swap or port-in",
      "Ask customer to clear message storage",
      "Ask customer to test SMS from another number",
      "Verify incoming SMS service status",
      "Raise a service ticket if OTP messages are consistently not received"
    ],
    severity: "Medium",
    customer_impact: "Customer may be unable to complete banking, login, or verification flows",
    escalation_required: true,
    escalation_condition: "Escalate when all incoming SMS is affected or OTP delivery fails after the restriction period."
  },
  "SIM-010": {
    issue_id: "SIM-010",
    category: "Roaming",
    issue_title: "SIM not working while roaming",
    customer_symptoms: [
      "SIM shows no service outside home circle or country",
      "Customer cannot make calls while roaming",
      "Mobile data does not work on roaming network"
    ],
    likely_causes: [
      "Roaming service is not enabled",
      "International roaming pack is inactive",
      "Preferred partner network is not selected",
      "Roaming usage limit has been reached"
    ],
    recommended_steps: [
      "Check whether roaming service is active",
      "Confirm roaming pack, validity, and usage limits",
      "Ask customer to manually select a partner network",
      "Ask customer to enable data roaming if data is affected",
      "Raise a roaming partner ticket if registration fails"
    ],
    severity: "High",
    customer_impact: "Customer may lose connectivity while travelling",
    escalation_required: true,
    escalation_condition: "Escalate if roaming is active and the customer cannot register on any partner network."
  },
  "SIM-011": {
    issue_id: "SIM-011",
    category: "SIM Swap",
    issue_title: "SIM swap completed but services not restored",
    customer_symptoms: [
      "Old SIM is inactive",
      "New SIM is inserted but service is unavailable",
      "Customer cannot receive calls, SMS, or data"
    ],
    likely_causes: [
      "SIM swap provisioning is delayed",
      "Incorrect SIM serial number was updated",
      "Mandatory cooling period is active",
      "Backend synchronization issue"
    ],
    recommended_steps: [
      "Verify the SIM swap request status",
      "Confirm the new ICCID or SIM serial number",
      "Inform customer of any applicable cooling period",
      "Ask customer to restart the device after completion",
      "Raise a backend provisioning ticket if status is failed or stuck"
    ],
    severity: "High",
    customer_impact: "Customer may be disconnected after replacement",
    escalation_required: true,
    escalation_condition: "Escalate if the swap is marked completed but the SIM remains inactive beyond SLA."
  },
  "SIM-012": {
    issue_id: "SIM-012",
    category: "Portability",
    issue_title: "Ported SIM not working",
    customer_symptoms: [
      "Customer moved number from another operator",
      "SIM is active but services are partially unavailable",
      "Customer cannot receive calls from some networks"
    ],
    likely_causes: [
      "Port-in routing update is incomplete",
      "Donor operator routing issue",
      "Provisioning delay after port completion",
      "Incomplete service mapping"
    ],
    recommended_steps: [
      "Verify port-in completion status",
      "Check whether all services are provisioned",
      "Test incoming and outgoing calls across networks",
      "Ask customer to restart the device",
      "Raise a number portability routing ticket if partial reachability persists"
    ],
    severity: "High",
    customer_impact: "Customer may face partial or complete service disruption after porting",
    escalation_required: true,
    escalation_condition: "Escalate if cross-network incoming calls or SMS fail after port completion."
  },
  "SIM-013": {
    issue_id: "SIM-013",
    category: "SIM Damage",
    issue_title: "SIM card damaged or worn out",
    customer_symptoms: [
      "SIM works intermittently",
      "Device frequently loses network",
      "SIM has visible scratches, cracks, or bent contacts"
    ],
    likely_causes: [
      "Physical wear and tear",
      "Improper cutting of SIM card",
      "Water or heat damage",
      "Repeated SIM tray insertion damage"
    ],
    recommended_steps: [
      "Ask customer to inspect the SIM for visible damage",
      "Ask customer to test the SIM in another device",
      "Check account status to rule out service suspension",
      "Recommend SIM replacement if physical damage is likely",
      "Advise customer to avoid using manually cut SIM cards"
    ],
    severity: "Medium",
    customer_impact: "Customer experiences intermittent or complete loss of service",
    escalation_required: false,
    escalation_condition: "Escalate only if replacement SIM activation fails."
  },
  "SIM-014": {
    issue_id: "SIM-014",
    category: "Device Compatibility",
    issue_title: "SIM not supported by device",
    customer_symptoms: [
      "SIM works in one phone but not another",
      "Device shows invalid SIM or unsupported SIM",
      "Network mode does not show 4G or 5G options"
    ],
    likely_causes: [
      "Device is locked to another carrier",
      "Device does not support required frequency bands",
      "Device software is outdated",
      "SIM profile is incompatible with older device"
    ],
    recommended_steps: [
      "Confirm whether the device is carrier locked",
      "Check device network band compatibility",
      "Ask customer to update device software",
      "Ask customer to set network mode to automatic",
      "Suggest testing the SIM in a known compatible device"
    ],
    severity: "Medium",
    customer_impact: "Service may not work on the customer's chosen device",
    escalation_required: false,
    escalation_condition: "Escalate only if the SIM fails in compatible unlocked devices."
  },
  "SIM-015": {
    issue_id: "SIM-015",
    category: "5G Services",
    issue_title: "5G not working on SIM",
    customer_symptoms: [
      "Customer has 5G phone but only sees 4G or LTE",
      "5G worked earlier but no longer appears",
      "Customer is in a claimed 5G coverage area"
    ],
    likely_causes: [
      "5G service is not provisioned",
      "Device does not support operator 5G bands",
      "5G coverage is weak or unavailable indoors",
      "SIM or plan is not eligible for 5G"
    ],
    recommended_steps: [
      "Confirm 5G plan and SIM eligibility",
      "Check 5G coverage at the customer location",
      "Verify device 5G band compatibility",
      "Ask customer to enable 5G or auto network mode",
      "Refresh 5G provisioning if eligible"
    ],
    severity: "Low",
    customer_impact: "Customer cannot access high-speed 5G services",
    escalation_required: true,
    escalation_condition: "Escalate if eligibility, coverage, and device compatibility are confirmed but 5G remains unavailable."
  },
  "SIM-016": {
    issue_id: "SIM-016",
    category: "Billing and Account",
    issue_title: "SIM suspended due to non-payment or verification issue",
    customer_symptoms: [
      "Outgoing services are blocked",
      "Customer receives payment or verification warning",
      "SIM shows network but services do not work"
    ],
    likely_causes: [
      "Unpaid bill",
      "Expired plan validity",
      "Incomplete customer verification",
      "Fraud or compliance hold"
    ],
    recommended_steps: [
      "Check account balance, bill status, and plan validity",
      "Verify whether any compliance hold is active",
      "Guide customer to complete payment or verification",
      "Confirm expected restoration timeline",
      "Escalate to billing or compliance team if hold is unclear"
    ],
    severity: "High",
    customer_impact: "Services may be partially or fully restricted",
    escalation_required: true,
    escalation_condition: "Escalate if payment or verification is complete but services are not restored within SLA."
  },
  "SIM-017": {
    issue_id: "SIM-017",
    category: "eSIM",
    issue_title: "eSIM profile installation failed",
    customer_symptoms: [
      "QR code scan fails",
      "Device says eSIM cannot be added",
      "eSIM activation remains pending"
    ],
    likely_causes: [
      "QR code expired or already used",
      "Device is not eSIM compatible",
      "Customer is connected to unstable Wi-Fi during setup",
      "Incorrect eSIM profile mapped to account"
    ],
    recommended_steps: [
      "Confirm device eSIM compatibility",
      "Verify customer identity and eSIM request status",
      "Ask customer to connect to stable Wi-Fi",
      "Check whether the QR code has already been consumed",
      "Generate a new eSIM profile if allowed by policy"
    ],
    severity: "High",
    customer_impact: "Customer cannot activate service on eSIM",
    escalation_required: true,
    escalation_condition: "Escalate if profile generation or mapping fails in the backend system."
  },
  "SIM-018": {
    issue_id: "SIM-018",
    category: "eSIM",
    issue_title: "eSIM deleted from device",
    customer_symptoms: [
      "Customer removed eSIM profile accidentally",
      "Device no longer shows the mobile plan",
      "QR code cannot be reused"
    ],
    likely_causes: [
      "Customer deleted the eSIM profile",
      "Device was reset",
      "QR code was single-use",
      "eSIM profile transfer was incomplete"
    ],
    recommended_steps: [
      "Verify customer identity",
      "Check whether the eSIM profile is still active on the account",
      "Explain that consumed QR codes may not be reusable",
      "Raise a new eSIM replacement or reissue request",
      "Guide customer through installation after new profile is issued"
    ],
    severity: "High",
    customer_impact: "Customer loses access to mobile service on eSIM device",
    escalation_required: true,
    escalation_condition: "Escalate if reissue fails or the profile status does not match the account."
  },
  "SIM-019": {
    issue_id: "SIM-019",
    category: "Network Quality",
    issue_title: "SIM frequently loses signal",
    customer_symptoms: [
      "Network bars drop frequently",
      "Calls disconnect unexpectedly",
      "Mobile data switches between 5G, 4G, and no service"
    ],
    likely_causes: [
      "Weak indoor coverage",
      "SIM card damage",
      "Device antenna or software issue",
      "Network congestion or local outage"
    ],
    recommended_steps: [
      "Check coverage and outage status for the location",
      "Ask customer to test outdoors or at another location",
      "Ask customer to restart the device",
      "Ask customer to test the SIM in another device",
      "Raise a network quality ticket if issue is location-specific"
    ],
    severity: "Medium",
    customer_impact: "Customer has unreliable voice and data connectivity",
    escalation_required: true,
    escalation_condition: "Escalate if multiple customers report the same location issue or the SIM works poorly across devices."
  },
  "SIM-020": {
    issue_id: "SIM-020",
    category: "Fraud and Security",
    issue_title: "Unauthorized SIM swap suspected",
    customer_symptoms: [
      "Customer suddenly loses service",
      "Customer receives SIM change notification they did not request",
      "Customer reports suspicious account activity"
    ],
    likely_causes: [
      "Fraudulent SIM swap attempt",
      "Account takeover",
      "Incorrectly processed replacement request",
      "Identity verification failure"
    ],
    recommended_steps: [
      "Immediately verify customer identity using enhanced checks",
      "Check recent SIM swap and account activity logs",
      "Temporarily block risky account changes if policy allows",
      "Escalate to fraud or security operations team",
      "Advise customer to secure linked banking and online accounts"
    ],
    severity: "Critical",
    customer_impact: "Customer may face account takeover, financial fraud, or loss of service",
    escalation_required: true,
    escalation_condition: "Always escalate suspected unauthorized SIM swap cases immediately."
  }
};

/** discovery tools */
const TOOLS = [
  {
    name: "get_sim_issue_details",
    description: "Retrieve details for a telecom SIM issue by issue id",
    inputSchema: {
      type: "object",
      properties: {
        sim_issue_id: {
          type: "string",
          description: "The SIM issue id (e.g., SIM-001)"
        }
      },
      required: ["sim_issue_id"]
    }
  },
  {
    name: "get_sim_issue_by_title",
    description: "Retrieve details for a telecom SIM issue by issue title",
    inputSchema: {
      type: "object",
      properties: {
        issue_title: {
          type: "string",
          description: "The SIM issue title (e.g., SIM card not detected)"
        }
      },
      required: ["issue_title"]
    }
  },
  {
    name: "list_sim_issues",
    description: "List all available telecom SIM issues with summary details",
    inputSchema: {
      type: "object",
      properties: {}
    }
  }
];

function listSimIssues() {
  return Object.values(simIssues).map((issue) => ({
    issue_id: issue.issue_id,
    category: issue.category,
    issue_title: issue.issue_title,
    severity: issue.severity,
    escalation_required: issue.escalation_required
  }));
}

function findSimIssueByTitle(issueTitle) {
  const normalizedTitle = String(issueTitle || "").trim().toLowerCase();
  return Object.values(simIssues).find(
    (issue) => issue.issue_title.toLowerCase() === normalizedTitle
  );
}

/** Three MCP methods using JSON RPC Messaging framework */
function handleJsonRpc(body) {
  const { method, id, params } = body;

  if (method === "initialize") {
    return {
      jsonrpc: "2.0", id,
      result: {
        protocolVersion: "2024-11-05",
        capabilities: { tools: { listChanged: false }},
        serverInfo: { name: "telecom-sim-issues", version: "1.0.0" }
      }
    };
  }

  if (method === "tools/list") {
    return { jsonrpc: "2.0", id, result: { tools: TOOLS } };
  }

  if (method === "tools/call") {
    const toolName = params.name;
    const args = params.arguments || {};
    let data;

    if (toolName === "list_sim_issues") {
      data = listSimIssues();
    } else if (toolName === "get_sim_issue_details") {
      data = simIssues[args.sim_issue_id] || { error: "SIM issue not found" };
    } else if (toolName === "get_sim_issue_by_title") {
      data = findSimIssueByTitle(args.issue_title) || { error: "SIM issue not found" };
    } else {
      data = { error: "Tool not found" };
    }

    return {
      jsonrpc: "2.0", id,
      result: { content: [{ type: "text", text: JSON.stringify(data) }] }
    };
  }

  return { jsonrpc: "2.0", id, result: {} };
}

/** Entry point for Vercel */
export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Mcp-Session-Id,MCP-Protocol-Version");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method === "GET") return res.json({
    status: "ok"
  });
  if (!req.body.id) return res.status(202).end();
  return res.json(handleJsonRpc(req.body));
}

