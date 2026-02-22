interface TweetCardProps {
  url: string
  handle: string
  name: string
  avatar?: string
  date: string
  children: React.ReactNode
}

export function TweetCard({ url, handle, name, avatar, date, children }: TweetCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2)

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block not-prose my-8 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md no-underline"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              width={48}
              height={48}
              className="rounded-full w-12 h-12 object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
              {initials}
            </div>
          )}
          <div>
            <div className="font-semibold text-gray-900 text-[15px] leading-tight">{name}</div>
            <div className="text-gray-500 text-sm">@{handle}</div>
          </div>
        </div>
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-800 flex-shrink-0" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>
      <div className="text-gray-800 text-[15px] leading-relaxed mb-3">
        {children}
      </div>
      <div className="text-gray-500 text-sm">
        {date}
      </div>
    </a>
  )
}
