import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
// type Width = 'narrow' | 'default' | 'wide';
type AppSettingContextType = {
	theme: Theme;
	setTheme: (t: Theme) => void;
	// width: Width;
	// setWidth: (w: Width) => void;
};

const AppSettingContext = createContext<AppSettingContextType | undefined>(
	undefined
);

export const AppSettingProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [theme, setTheme] = useState<Theme>('light');
	// const [width, setWidth] = useState<Width>('default');

	useEffect(() => {
		const root = document.documentElement;
		if (theme === 'dark') root.classList.add('dark');
		else root.classList.remove('dark');
	}, [theme]);

	return (
		<AppSettingContext.Provider value={{ theme, setTheme }}>
			{children}
		</AppSettingContext.Provider>
	);
};

export function useAppSettings() {
	const context = useContext(AppSettingContext);
	if (!context)
		throw new Error('useAppSettings must be inside AppSettingsProvider');
	return context;
}
