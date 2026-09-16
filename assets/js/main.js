const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.dataset.open === 'true';
    nav.dataset.open = String(!isOpen);
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.textContent = isOpen ? 'Menu' : 'Close';
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.dataset.open = 'false';
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = 'Menu';
    });
  });
}

/*
 * HTB machines
 *
 * Add new machines to this array.
 * Set walkthrough to the path of your own walkthrough page when one exists.
 * Leave walkthrough as null until the walkthrough is actually published.
 */

const machines = [
  {
    name: "Cap",
    difficulty: "Easy",
    os: "Linux",
    logo: "https://cdn.services-k8s.prod.aws.htb.systems/content/machines/avatar/9e4d90d2-73c7-4da0-a15f-662bbc048868.png",
    achievement: "https://labs.hackthebox.com/achievement/machine/1910661/351",
    htb: "https://app.hackthebox.com/machines/Cap",
    walkthrough: null
  },
  {
    name: "Cohort",
    difficulty: "Easy",
    os: "Linux",
    logo: "https://cdn.services-k8s.prod.aws.htb.systems/content/machines/avatar/a1fb351c-6269-49cd-8789-fc579a687c97-1781002999.png",
    achievement: "https://labs.hackthebox.com/achievement/machine/1910661/933",
    htb: "https://app.hackthebox.com/machines/Cohort",
    walkthrough: null
  },
  {
    name: "Connected",
    difficulty: "Easy",
    os: "Linux",
    logo: "https://cdn.services-k8s.prod.aws.htb.systems/content/machines/avatar/a1e14c0a-2ce3-44f2-a101-f0415bb1e577-1779890154.png",
    achievement: "https://labs.hackthebox.com/achievement/machine/1910661/906",
    htb: "https://app.hackthebox.com/machines/Connected",
    walkthrough: null
  },
  {
    name: "DevHub",
    difficulty: "Medium",
    os: "Linux",
    logo: "https://cdn.services-k8s.prod.aws.htb.systems/content/machines/avatar/a1e13a3f-a4e4-4757-94e4-32b2e0d693c0-1779887169.png",
    achievement: "https://labs.hackthebox.com/achievement/machine/1910661/903",
    htb: "https://app.hackthebox.com/machines/DevHub",
    walkthrough: null
  },
  {
    name: "Reactor",
    difficulty: "Easy",
    os: "Linux",
    logo: "https://cdn.services-k8s.prod.aws.htb.systems/content/machines/avatar/a1c58c3b-0931-413d-9394-5fae4350ec4c-1778698333.png",
    achievement: "https://labs.hackthebox.com/achievement/machine/1910661/900",
    htb: "https://app.hackthebox.com/machines/Reactor",
    walkthrough: null
  },
  {
    name: "TwoMillion",
    difficulty: "Easy",
    os: "Linux",
    logo: "https://cdn.services-k8s.prod.aws.htb.systems/content/machines/avatar/9e4d90cd-c843-47e4-97f7-c0a2d69b78ce.png",
    achievement: "https://labs.hackthebox.com/achievement/machine/1910661/547",
    htb: "https://app.hackthebox.com/machines/TwoMillion",
    walkthrough: null
  },
  {
    name: "Facts",
    difficulty: "Easy",
    os: "Linux",
    logo: "https://cdn.services-k8s.prod.aws.htb.systems/content/machines/avatar/a0efb09d-2937-4e7c-bd04-ba2e4386b8b1.png",
    achievement: "https://labs.hackthebox.com/achievement/machine/1910661/829",
    htb: "https://app.hackthebox.com/machines/Facts",
    walkthrough: null
  },
  {
    name: "Browsed",
    difficulty: "Medium",
    os: "Linux",
    logo: "https://cdn.services-k8s.prod.aws.htb.systems/content/machines/avatar/a0c75262-73b6-45ba-b27f-5d9f048dc5dd.png",
    achievement: "https://labs.hackthebox.com/achievement/machine/1910661/820",
    htb: "https://app.hackthebox.com/machines/Browsed",
    walkthrough: null
  },
  {
    name: "Gavel",
    difficulty: "Medium",
    os: "Linux",
    logo: "https://cdn.services-k8s.prod.aws.htb.systems/content/machines/avatar/a065ba38-a36c-4635-a59d-b47742378409.png",
    achievement: "https://labs.hackthebox.com/achievement/machine/1910661/811",
    htb: "https://app.hackthebox.com/machines/Gavel",
    walkthrough: null
  },
  {
    name: "Conversor",
    difficulty: "Easy",
    os: "Linux",
    logo: "https://cdn.services-k8s.prod.aws.htb.systems/content/machines/avatar/a02c6f24-5b8e-4e41-919e-40464d7c1a18.png",
    achievement: "https://labs.hackthebox.com/achievement/machine/1910661/787",
    htb: "https://app.hackthebox.com/machines/Conversor",
    walkthrough: null
  },
  {
    name: "Imagery",
    difficulty: "Medium",
    os: "Linux",
    logo: "https://cdn.services-k8s.prod.aws.htb.systems/content/machines/avatar/9ff4b8af-7914-462e-9b52-c5874d1a675a.png",
    achievement: "https://labs.hackthebox.com/achievement/machine/1910661/751",
    htb: "https://app.hackthebox.com/machines/Imagery",
    walkthrough: null
  },
  {
    name: "Expressway",
    difficulty: "Easy",
    os: "Linux",
    logo: "https://cdn.services-k8s.prod.aws.htb.systems/content/machines/avatar/9fe456df-b95f-4a33-9a4c-9cdeecc6c08d.png",
    achievement: "https://labs.hackthebox.com/achievement/machine/1910661/736",
    htb: "https://app.hackthebox.com/machines/Expressway",
    walkthrough: null
  },
  {
    name: "Soulmate",
    difficulty: "Easy",
    os: "Linux",
    logo: "https://cdn.services-k8s.prod.aws.htb.systems/content/machines/avatar/9fc816a0-cb01-44bf-a506-fb86f93bf8bd.png",
    achievement: "https://labs.hackthebox.com/achievement/machine/1910661/721",
    htb: "https://app.hackthebox.com/machines/Soulmate",
    walkthrough: null
  },
  {
    name: "CodePartTwo",
    difficulty: "Easy",
    os: "Linux",
    logo: "https://cdn.services-k8s.prod.aws.htb.systems/content/machines/avatar/9f7fc279-ccc7-4d3a-a99b-02aeab299881.png",
    achievement: "https://labs.hackthebox.com/achievement/machine/1910661/692",
    htb: "https://app.hackthebox.com/machines/CodePartTwo",
    walkthrough: null
  },
  {
    name: "Editor",
    difficulty: "Easy",
    os: "Linux",
    logo: "https://cdn.services-k8s.prod.aws.htb.systems/content/machines/avatar/9f5d66d4-6fd5-4de0-808b-fd1568184c8e.png",
    achievement: "https://labs.hackthebox.com/achievement/machine/1910661/684",
    htb: "https://app.hackthebox.com/machines/Editor",
    walkthrough: null
  },
  {
    name: "Era",
    difficulty: "Medium",
    os: "Linux",
    logo: "https://cdn.services-k8s.prod.aws.htb.systems/content/machines/avatar/9f5d65f2-ce76-4699-b5d0-9175d7363f6c.png",
    achievement: "https://labs.hackthebox.com/achievement/machine/1910661/683",
    htb: "https://app.hackthebox.com/machines/Era",
    walkthrough: null
  },
  {
    name: "Outbound",
    difficulty: "Easy",
    os: "Linux",
    logo: "https://cdn.services-k8s.prod.aws.htb.systems/content/machines/avatar/9f3b3364-199d-486b-8c7a-a4c473c5b730.png",
    achievement: "https://labs.hackthebox.com/achievement/machine/1910661/672",
    htb: "https://app.hackthebox.com/machines/Outbound",
    walkthrough: null
  },
  {
    name: "Artificial",
    difficulty: "Easy",
    os: "Linux",
    logo: "https://cdn.services-k8s.prod.aws.htb.systems/content/machines/avatar/9f2d4814-df9d-4360-a10d-252532a053a7.png",
    achievement: "https://labs.hackthebox.com/achievement/machine/1910661/668",
    htb: "https://app.hackthebox.com/machines/Artificial",
    walkthrough: null
  },
  {
    name: "Planning",
    difficulty: "Easy",
    os: "Linux",
    logo: "https://cdn.services-k8s.prod.aws.htb.systems/content/machines/avatar/9ebe5c8d-6e00-4302-98b4-163d67362571.png",
    achievement: "https://labs.hackthebox.com/achievement/machine/1910661/660",
    htb: "https://app.hackthebox.com/machines/Planning",
    walkthrough: null
  },
  {
    name: "Strutted",
    difficulty: "Medium",
    os: "Linux",
    logo: "https://cdn.services-k8s.prod.aws.htb.systems/content/machines/avatar/9e4d90cc-30fb-4247-9e35-73e0d55dbf95.png",
    achievement: "https://labs.hackthebox.com/achievement/machine/1910661/644",
    htb: "https://app.hackthebox.com/machines/Strutted",
    walkthrough: null
  }
];

function renderMachineCards() {
  const grid = document.querySelector('#machine-grid');

  if (!grid) {
    return;
  }

  grid.innerHTML = machines.map((machine) => {
    const walkthroughLink = machine.walkthrough
      ? `<a class="button" href="${machine.walkthrough}">Read Walkthrough</a>`
      : '';

    return `
      <article class="card machine-card">
        <div class="machine-logo">
          <img
            src="${machine.logo}"
            alt="${machine.name} machine logo"
            loading="lazy"
            decoding="async"
          >
        </div>

        <p class="meta">${machine.difficulty} · ${machine.os}</p>

        <h3>${machine.name}</h3>

        <p class="machine-status">✓ Pwned</p>

        <div class="machine-actions">
          ${walkthroughLink}

          <a
            class="button button--secondary"
            href="${machine.achievement}"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTB Achievement ↗
          </a>

          <a
            class="button"
            href="${machine.htb}"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTB Machine ↗
          </a>
        </div>
      </article>
    `;
  }).join('');
}

renderMachineCards();
/*
 * Copy buttons for code blocks
 */

document.querySelectorAll('pre').forEach((pre) => {
  const code = pre.querySelector('code');

  if (!code) {
    return;
  }

  const button = document.createElement('button');

  button.className = 'code-copy';
  button.type = 'button';
  button.textContent = 'Copy';

  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(code.innerText);
      button.textContent = 'Copied';

      setTimeout(() => {
        button.textContent = 'Copy';
      }, 1500);
    } catch {
      button.textContent = 'Failed';

      setTimeout(() => {
        button.textContent = 'Copy';
      }, 1500);
    }
  });

  pre.appendChild(button);
});
