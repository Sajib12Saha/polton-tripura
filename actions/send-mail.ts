'use server';

export async function sendMailAction(formData: FormData): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch(`${process.env.NEXT_ADMIN_URL!}/api/sendMail`, {
      method: "POST",
      body: formData,
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message || "Server error");
    }

    return { success: true, message: result.message };
  } catch (error: any) {
    console.error("sendMailAction error:", error);
    return { success: false, message: error?.message || "Unknown error" };
  }
}
