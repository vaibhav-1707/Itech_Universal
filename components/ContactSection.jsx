"use client";
import { useState } from "react";
import { Send, MapPin, Mail, Phone, Clock } from "lucide-react";
import Spinner from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import DottedButton from "./ui/DottedButton";
import { ShineBorder } from "./magicui/shine-border";
import { BorderBeam } from "./magicui/border-beam";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you for your message. We will get back to you soon!",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 ">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-[42rem] mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <ShineBorder
            className="relative  rounded-lg"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <CardContent className="grid md:grid-cols-2 gap-8 p-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <MapPin className="h-5 w-5" />
                      <p>
                        Business Centre, Sharjah Publishing City Free Zone,
                        Sharjah, UAE
                      </p>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Mail className="h-5 w-5" />
                      <p>admin@itechuniversal.com</p>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Phone className="h-5 w-5" />
                      <p>+971 58 570 1432</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Business Hours</h3>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Clock className="h-5 w-5" />
                    <p>Monday - Friday: 9:00 AM - 6:00 PM (UAE Time)</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </label>

                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                  />
                </div>

                {submitStatus.message && (
                  <div
                    className={`p-3 rounded-md ${
                      submitStatus.type === "success"
                        ? "bg-green-500/15 text-green-600"
                        : "bg-red-500/15 text-red-600"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none hover:bg-gray-100"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <Spinner />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </ShineBorder>
        </Card>

        {/* Add the Map Section */}
        <div className="mt-16 max-w-4xl mx-auto w-[100vw]">
          <h3 className="text-xl font-semibold mb-4">Our Location</h3>
          <div className=" h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=55.37743377685547%2C25.280482%2C55.387433%2C25.289482&amp;layer=mapnik&amp;marker=25.284982%2C55.382433"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <p className="text-sm text-muted-foreground mt-2 text-center">
            <a
              href="https://www.openstreetmap.org/?mlat=25.284982&mlon=55.382433"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              View larger map
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
