"use client";

import React, { useState } from "react";
import {
    Bold, Italic, Underline, List, ListOrdered,
    Type, Mic, Plus, FileText, X, Trash2
} from "lucide-react";

// --- Types ---
type Template = {
    id: string;
    title: string;
    content: string;
};

// --- Mock Initial Templates ---
const INITIAL_TEMPLATES: Template[] = [
    {
        id: "1",
        title: "Gastritis Leve",
        content: "Signo de gastritis leve a moderada.\nSe recomienda dieta blanda por 48hs."
    },
    {
        id: "2",
        title: "Nefritis Crónica",
        content: "Signo de nefritis Crónica en riñón derecho.\nMonitoreo de función renal sugerido."
    }
];

export default function DiagnosisEditor() {
    const [content, setContent] = useState("");
    const [templates, setTemplates] = useState<Template[]>(INITIAL_TEMPLATES);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showTemplateMenu, setShowTemplateMenu] = useState(false);

    // --- Handlers ---

    const handleInsertTemplate = (templateContent: string) => {
        // CAMBIO: Ahora reemplaza todo el contenido en lugar de concatenar
        setContent(templateContent);
        setShowTemplateMenu(false);
    };

    const handleSaveNewTemplate = (title: string, newContent: string) => {
        const newTemplate: Template = {
            id: Date.now().toString(),
            title,
            content: newContent,
        };
        setTemplates([...templates, newTemplate]);
        setIsModalOpen(false);
    };

    const handleDeleteTemplate = (id: string) => {
        setTemplates((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-4 font-sans">

            {/* --- Main Card --- */}
            <div className="border border-gray-200 rounded-lg shadow-sm bg-white overflow-hidden">

                {/* Header Accordion Style */}
                <div className="bg-blue-50/50 p-3 border-b border-gray-100 flex items-center gap-2 text-gray-700 font-semibold cursor-pointer">
                    <div className="bg-blue-100 p-1 rounded text-blue-600">
                        <FileText size={18} />
                    </div>
                    Motivo del Estudio
                </div>

                <div className="p-4">
                    <div className="mb-3 flex items-center gap-2 text-gray-800 font-medium">
                        <span>🩺</span> Diagnóstico Presuntivo
                    </div>

                    {/* --- Editor Container --- */}
                    <div className="border border-gray-300 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition-all">

                        {/* Toolbar */}
                        <div className="flex items-center justify-between p-2 border-b border-gray-200 bg-gray-50 rounded-t-md">
                            <div className="flex items-center gap-1 text-gray-600">
                                <button className="p-1.5 hover:bg-gray-200 rounded"><Bold size={16} /></button>
                                <button className="p-1.5 hover:bg-gray-200 rounded"><Italic size={16} /></button>
                                <button className="p-1.5 hover:bg-gray-200 rounded"><Underline size={16} /></button>
                                <div className="w-px h-4 bg-gray-300 mx-1"></div>
                                <button className="p-1.5 hover:bg-gray-200 rounded"><List size={16} /></button>
                                <button className="p-1.5 hover:bg-gray-200 rounded"><ListOrdered size={16} /></button>
                                <button className="p-1.5 hover:bg-gray-200 rounded"><Type size={16} /></button>
                            </div>

                            <div className="flex items-center gap-2">
                                {/* Template Dropdown Trigger */}
                                <div className="relative">
                                    <button
                                        onClick={() => setShowTemplateMenu(!showTemplateMenu)}
                                        className="text-xs font-medium bg-white border border-gray-300 px-2 py-1.5 rounded hover:bg-gray-50 flex items-center gap-1 text-gray-600"
                                    >
                                        <FileText size={14} /> Plantillas
                                    </button>

                                    {/* Template Dropdown Menu */}
                                    {showTemplateMenu && (
                                        <div className="absolute right-0 top-full mt-1 w-72 bg-white border border-gray-200 rounded-md shadow-lg z-10 py-1">
                                            <div className="px-3 py-2 text-xs font-semibold text-gray-400 border-b border-gray-100">
                                                INSERTAR PLANTILLA (Reemplaza texto)
                                            </div>

                                            <div className="max-h-60 overflow-y-auto">
                                                {templates.length === 0 && (
                                                    <div className="px-3 py-2 text-sm text-gray-400 italic">No hay plantillas</div>
                                                )}
                                                {templates.map((t) => (
                                                    <div key={t.id} className="group flex items-center justify-between hover:bg-blue-50 px-1 py-1">
                                                        <button
                                                            onClick={() => handleInsertTemplate(t.content)}
                                                            className="flex-1 text-left px-2 py-1 text-sm text-gray-700 group-hover:text-blue-600 truncate"
                                                            title={t.title}
                                                        >
                                                            {t.title}
                                                        </button>
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleDeleteTemplate(t.id);
                                                            }}
                                                            className="p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                                                            title="Eliminar plantilla"
                                                        >
                                                            <Trash2 size={14} />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="border-t border-gray-100 mt-1 pt-1">
                                                <button
                                                    onClick={() => {
                                                        setShowTemplateMenu(false);
                                                        setIsModalOpen(true);
                                                    }}
                                                    className="w-full text-left px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 font-medium flex items-center gap-2"
                                                >
                                                    <Plus size={14} /> Crear nueva plantilla
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <button className="bg-blue-500 hover:bg-blue-600 text-white p-1.5 rounded transition-colors">
                                    <Mic size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Text Area */}
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full p-3 min-h-[160px] outline-none resize-y text-gray-900 bg-white rounded-b-md placeholder-gray-400"
                            placeholder="Escriba el diagnóstico aquí..."
                        />
                    </div>
                </div>
            </div>

            {/* --- Create Template Modal --- */}
            {isModalOpen && (
                <TemplateModal
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleSaveNewTemplate}
                    currentText={content}
                />
            )}

        </div>
    );
}

// --- Sub-component: Template Modal ---
function TemplateModal({ onClose, onSave, currentText }: {
    onClose: () => void,
    onSave: (title: string, content: string) => void,
    currentText: string
}) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState(currentText || "");

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
                <div className="flex justify-between items-center p-4 border-b border-gray-100">
                    {/* CAMBIO: text-gray-900 para asegurar oscuridad */}
                    <h3 className="font-semibold text-gray-900">Nueva Plantilla</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <X size={20} />
                    </button>
                </div>

                <div className="p-4 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-900 mb-1">Título de la plantilla</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Ej: Gastritis Leve"
                            // CAMBIO: text-gray-900 explícito para evitar herencia de modo oscuro global
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white placeholder-gray-400"
                            autoFocus
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-900 mb-1">Contenido</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="El texto que se insertará..."
                            // CAMBIO: text-gray-900 explícito
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] text-gray-900 bg-white placeholder-gray-400"
                        />
                    </div>
                </div>

                <div className="p-4 bg-gray-50 flex justify-end gap-2 border-t border-gray-100">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-md transition-colors"
                    >
                        Cancelar
                    </button>
                    <button
                        disabled={!title || !content}
                        onClick={() => onSave(title, content)}
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Guardar Plantilla
                    </button>
                </div>
            </div>
        </div>
    );
}